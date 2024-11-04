from telethon import TelegramClient, events
import asyncio
import sqlite3
from datetime import datetime
import re
import os
from dotenv import load_dotenv
from telethon.tl.types import User, PeerUser

load_dotenv()

API_ID = os.getenv('TELEGRAM_API_ID')
API_HASH = os.getenv('TELEGRAM_API_HASH')
TARGET_BOT = os.getenv('TELEGRAM_TAGET_BOT_USERNAME')  

def setup_database():
    conn = sqlite3.connect('messages.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS messages
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
         message_text TEXT,
         addresses TEXT,
         source_link TEXT,
         source_channel TEXT,
         timestamp DATETIME)
    ''')
    conn.commit()
    return conn

def parse_message(message_text):
    addresses = re.findall(r'Address #\d+: ([A-Za-z0-9]{32,})', message_text)
    
    source_match = re.search(r'Source: (https://t\.me/\S+)', message_text)
    source_link = source_match.group(1) if source_match else None
    
    channel_match = re.search(r'from @(\w+)', message_text)
    source_channel = channel_match.group(1) if channel_match else None
        
    return addresses, source_link, source_channel

async def main():
    conn = setup_database()
    cursor = conn.cursor()

    client = TelegramClient('message_session', API_ID, API_HASH)
    await client.start()

    bot = await client.get_entity(TARGET_BOT)
    print(f"Successfully connected and found bot: {TARGET_BOT}")

    @client.on(events.NewMessage)
    async def handle_outgoing_message(event):
        try:
            if event.is_private and event.message.peer_id.user_id == bot.id:
                message_text = event.message.text
                

                # Parse the message
                addresses, source_link, source_channel = parse_message(message_text)

                if addresses:            
                    cursor.execute('''
                        INSERT INTO messages 
                        (message_text, addresses, source_link, source_channel, timestamp)
                        VALUES (?, ?, ?, ?, ?)
                    ''', (
                        message_text,
                        ','.join(addresses) if addresses else None,
                        source_link,
                        source_channel,
                        datetime.now()
                    ))
                    conn.commit()
                
                print("\n=== Message Processed ===")
        
        except Exception as e:
            print(f"Error processing message: {e}")
            import traceback
            print(traceback.format_exc())

    print("Client started - Now monitoring messages to", TARGET_BOT)
    print("Press Ctrl+C to stop")
    
    # Keep the client running
    await client.run_until_disconnected()

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nStopping the client...")
    except Exception as e:
        print(f"An error occurred: {e}")