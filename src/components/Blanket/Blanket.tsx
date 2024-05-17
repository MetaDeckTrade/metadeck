import { Suspense, useRef, MutableRefObject} from 'react'
import Model from './Model/Model'
import dynamic from 'next/dynamic'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'

const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,
    loading: () => (<div>Loading Page Scene...</div>),
})

interface Blanket {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>
}

export default function Blanket({containerRef}: Blanket) {

    const { ref, inView } = useInView();
    

    return(
        <div ref={ref} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%'}}>
            <PageView>
                <Suspense fallback>
                    <Model inView={inView} containerRef={containerRef}></Model>
                    <ambientLight intensity={1} />
                    <pointLight position={[20, 30, 10]}  intensity={1} />
                    <pointLight position={[-10, -10, -10]} color='blue' />
                    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 7]} />
                </Suspense>
                <Preload all></Preload>
            </PageView>
        </div>
    )    
}