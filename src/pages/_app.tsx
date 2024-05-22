import { CanvasLayout } from '@/layouts/CanvasLayout/CanvasLayout'
import { ScrollLayout } from '@/layouts/ScrollLayout/ScrollLayout'
import { Lvh } from '@/hooks/useLvh'
import { AdaptiveGrid } from '@/hooks/useGrid'
import GlobalStyles from "@/styles"
import ResponceGrid from '@/styles/utils'

import type { AppProps } from 'next/app'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Network from '@/components/layout/Network/Network'
import ScrollDown from '@/components/layout/ScrollDown/ScrollDown'
import Burger from '@/components/layout/Burger/Burger'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ScrollLayout>
            <ScrollDown>
                <CanvasLayout>
                    <Burger />
                    <ResponceGrid />
                    <Header />
                    <GlobalStyles />
                    <Network />
                    <Lvh />
                    <AdaptiveGrid baseWidth={1920} />
                    <Component {...pageProps} />
                </CanvasLayout>
                <Footer />
            </ScrollDown>
        </ScrollLayout>
    )
}
