import { Html, Head, Main, NextScript } from 'next/document'

const title = 'Meta Deck'
const description = 'MetaDeck is a top-tier trading platform designed for serious traders, offering instant trade execution, customizable controls, and real-time analytics. It seamlessly integrates with major crypto exchanges and trading bots, providing an ergonomic, responsive interface for all-day comfort. With MetaDeck, you can personalize your trading experience, make informed decisions, and never miss an opportunity.'
const author = 'Meta Deck'
const twitter = 'meta.deck'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Recommended Meta Tags */}
                <meta charSet='utf-8' />
                <meta name='language' content='english' />
                <meta httpEquiv='content-type' content='text/html' />
                <meta name='author' content={author} />
                <meta name='designer' content={author} />
                <meta name='publisher' content={author} />

                {/* Search Engine Optimization Meta Tags */}
                {/* <title key="title">{title}</title>
                <meta name='description' content={description} key="description" /> */}
                <meta name="keywords" content="MetaDeck, trading platform, serious traders, instant trade execution, customizable controls, real-time analytics, crypto exchanges, trading bots, ergonomic interface, responsive interface, personalized trading experience, informed decisions, trading opportunities, top-tier trading, trading comfort, MetaDeck platform, crypto trading, advanced trading tools, professional trading, trading integration, trading strategy, trading dashboard, seamless trading, trading insights"/>
                <meta name='robots' content='index,follow' />
                <meta name='distribution' content='web' />
                {/* 
                Facebook Open Graph meta tags
                    documentation: https://developers.facebook.com/docs/sharing/opengraph */}
                <meta property='og:title' content={title} />
                <meta property='og:type' content='site' />
                <meta property='og:site_name' content={title} />
                <meta property='og:description' content={description} />

                <link rel='apple-touch-icon' href='/img/logoDock.png' />
                <link rel='apple-touch-icon' sizes='16x16' href='/img/logoDock.png' />
                <link rel='apple-touch-icon' sizes='32x32' href='/img/logoDock.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/img/logoDock.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' color='#000000' href='/img/logoDock.png' />
                <link rel='apple-touch-startup-image' href='/img/logoDock.png' />

                {/* fonts */}
                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com"/>
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"></link>

                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com"/>
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>
                {/* Meta Tags for HTML pages on Mobile */}
                {/* <meta name="format-detection" content="telephone=yes"/>
                    <meta name="HandheldFriendly" content="true"/>  */}
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
                <meta name='theme-color' content='#000' />
                <link rel='shortcut icon' href='/img/logoDock.png' />

                {/* 
                Twitter Summary card
                    documentation: https://dev.twitter.com/cards/getting-started
                    Be sure validate your Twitter card markup on the documentation site. */}
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content={twitter} />

                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com"/>
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}