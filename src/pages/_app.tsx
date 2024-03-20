import { CanvasLayout } from '@/layouts/CanvasLayout/CanvasLayout'
import { ScrollLayout } from '@/layouts/ScrollLayout/ScrollLayout'
import { Lvh } from '@/hooks/useLvh'
import { AdaptiveGrid } from '@/hooks/useGrid'
import GlobalStyles from "@/styles"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ScrollLayout>
            <CanvasLayout>
                <GlobalStyles/>
                <Lvh/>
                <AdaptiveGrid baseWidth={1440}/>
                <Component {...pageProps} />
            </CanvasLayout>
        </ScrollLayout>
    )
}
