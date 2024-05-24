import { Html, Head, Main, NextScript } from 'next/document'

const title = 'Meta Deck | The Ultimate Trading Companion'
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
                <meta name="keywords" content="MetaDeck, trading platform, serious traders, instant trade execution, customizable controls, real-time analytics, crypto exchanges, trading bots, ergonomic interface, responsive interface, personalized trading experience, informed decisions, trading opportunities, top-tier trading, trading comfort, MetaDeck platform, crypto trading, advanced trading tools, professional trading, trading integration, trading strategy, trading dashboard, seamless trading, trading insights" />
                <meta name='robots' content='index,follow' />
                <meta name='distribution' content='web' />
                {/* 
                Facebook Open Graph meta tags
                    documentation: https://developers.facebook.com/docs/sharing/opengraph */}



                <meta property='og:title' content={title} />
                <meta property='og:type' content='site' />
                <meta property='og:image' content='/icons/logo100x100.png' />
                <meta property='og:site_name' content={title} />
                <meta property='og:description' content={description} />

                <link rel='apple-touch-icon' href='/icons/apple-icon-180x180.png' />
                <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
                <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-icon-180x180.png' />
                <link rel='manifest' href='/manifest.json' />
                {/* <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' /> */}
                <link rel='apple-touch-startup-image' href='/icons/apple-icon-120x120.png' />

                {/* <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" /> */}
                {/* <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" /> */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" /> */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/icons/favicon-32x32.png" />
                <meta name="theme-color" content="#ffffff" />
                {/* fonts */}
                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com" />
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"></link>

                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com" />
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
                {/* Meta Tags for HTML pages on Mobile */}
                {/* <meta name="format-detection" content="telephone=yes"/>
                    <meta name="HandheldFriendly" content="true"/>  */}
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
                <meta name='theme-color' content='#000' />
                {/* <link rel='shortcut icon' href='/icons/ms-icon-144x144.png' /> */}

                {/* 
                Twitter Summary card
                    documentation: https://dev.twitter.com/cards/getting-started
                    Be sure validate your Twitter card markup on the documentation site. */}
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content={twitter} />

                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com" />
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
