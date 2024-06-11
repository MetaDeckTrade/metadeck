import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Recommended Meta Tags */}
                <meta charSet='utf-8' />
                <meta name='language' content='english' />
                <meta httpEquiv='content-type' content='text/html' />

                {/* Search Engine Optimization Meta Tags */}
         
                <meta name="keywords" content="MetaDeck, trading platform, serious traders, instant trade execution, customizable controls, real-time analytics, crypto exchanges, trading bots, ergonomic interface, responsive interface, personalized trading experience, informed decisions, trading opportunities, top-tier trading, trading comfort, MetaDeck platform, crypto trading, advanced trading tools, professional trading, trading integration, trading strategy, trading dashboard, seamless trading, trading insights" />
                <meta name='robots' content='index,follow' />
                <meta name='distribution' content='web' />
                {/* 
                Facebook Open Graph meta tags
                    documentation: https://developers.facebook.com/docs/sharing/opengraph */}

                <meta property='og:type' content='site' />
         
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                {/* fonts */}
                <link fetchPriority='high' rel="preconnect" href="https://fonts.googleapis.com" />
                <link fetchPriority='high' rel="preconnect" href="https://fonts.gstatic.com" />
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"></link>
                <link fetchPriority='high' href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

                {/* Meta Tags for HTML pages on Mobile */}
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
                <meta name='theme-color' content='#000' />

                {/* Twitter Summary card
                    documentation: https://dev.twitter.com/cards/getting-started
                    Be sure validate your Twitter card markup on the documentation site. */}
                <meta name='twitter:card' content='summary' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
