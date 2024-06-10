import { CanvasLayout } from '@/layouts/CanvasLayout/CanvasLayout'
import { ScrollLayout } from '@/layouts/ScrollLayout/ScrollLayout'
import { Lvh } from '@/hooks/useLvh'
import { AdaptiveGrid } from '@/hooks/useGrid'
import GlobalStyles from "@/styles"
import ResponceGrid from '@/styles/utils'

import type { AppProps } from 'next/app'
import ScrollDown from '@/components/layout/ScrollDown/ScrollDown'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const coordinatesRef = { x: 0, y: 0 };


export default function App({ Component, pageProps }: AppProps) {
    const [start, setStart] = useState(false)
    useLayoutEffect(() => void setStart(true), [])


    const handlePointerMove = (event: any) => {
      const { clientX, clientY } = event;
  
  
      coordinatesRef.x = ((clientX) / window.innerWidth) * 2 - 1;
      coordinatesRef.y = ((clientY) / window.innerHeight) * 2 - 1;
    };
  
    useEffect(() => {
      const targetElement = document.body
  
      if (targetElement) {
        targetElement.addEventListener('mousemove', handlePointerMove);
  
        return () => {
          targetElement.removeEventListener('mousemove', handlePointerMove);
        };
      }
    }, []);

    return (
        <>

            {
                start ?
                    <ScrollLayout>
                        <ScrollDown>
                            <CanvasLayout>
                                <ResponceGrid />
                                <GlobalStyles />
                                <Lvh />
                                <AdaptiveGrid baseWidth={1920} />
                                <Component {...pageProps} />
                            </CanvasLayout>
                        </ScrollDown>
                    </ScrollLayout>
                    : <></>
            }


        </>
    )
}
