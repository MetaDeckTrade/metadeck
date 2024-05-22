import { Suspense, useRef, MutableRefObject} from 'react'
import dynamic from 'next/dynamic'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import BlanketModal from './Models/BlanketModel'
import ButtonModels from './Models/ButtonModels'

const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,
    loading: () => (<div>Loading Page Scene...</div>),
})

interface Blanket {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstContainerRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    blockNumber: number,
}

export default function BlanketWithButtons({containerRef, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef, blockNumber}: Blanket) {

    const { ref, inView } = useInView();
    const width = useWindowWidth()    

    return(
        <div ref={ref} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: '16'}}>
            <PageView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '17'}}>
                <Suspense fallback>
                    <BlanketModal position={[-2.3, -.4, -1.3]} rotation={[0.8, 3.4, 0.1]} inView={inView} containerRef={containerRef}></BlanketModal>
                    <ButtonModels blockNumber={blockNumber} activeNumber={3} position={[-1.5, -.57, 1]} rotation={[-.09, 3.5, -.14]} inView={inView} containerRef={containerRef} url='/models/green.glb'></ButtonModels>
                    <ButtonModels blockNumber={blockNumber} activeNumber={1} position={[-1.65, .5, 1]} rotation={[-.09, 3.5, -.15]} inView={inView} containerRef={containerRef} url='/models/orange.glb'></ButtonModels>
                    <ButtonModels blockNumber={blockNumber} activeNumber={2} position={[-1.55, 0, 1]} rotation={[-.09, 3.5, -.14]} inView={inView} containerRef={containerRef} url='/models/yellow.glb'></ButtonModels>
                    <directionalLight color='white' intensity={0.5} position={[0, 0, 10]}></directionalLight>
                    <ambientLight intensity={1} />
                    <pointLight position={[20, 30, 10]}  intensity={1} />
                    <pointLight position={[-10, -10, -10]} color='blue' />
                    <PerspectiveCamera makeDefault fov={40} position={[0, 0, width < 1440 ? 9 : 7]} />
                </Suspense>
                <Preload all></Preload>
            </PageView>
        </div>
    )    
}