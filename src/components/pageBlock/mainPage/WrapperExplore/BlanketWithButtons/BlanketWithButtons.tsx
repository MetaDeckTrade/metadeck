import { MutableRefObject, useEffect, useRef} from 'react'
import { Float, PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import BlanketModal from './Models/BlanketModel'
import ButtonModels from './Models/ButtonModels'
import useGlobalStore from '@/store/store'
import { PageView } from '@/layouts/CanvasLayout/components/PageView'


interface Blanket {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstContainerRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    blockNumber: number,
    blockRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
}

export default function BlanketWithButtons({containerRef, blockNumber,blockRef}: Blanket) {

    const { ref, inView } = useInView();
    const width = useWindowWidth()    
    const timeRef = useRef<any>(0)

    const setinViewButtonBlanket = useGlobalStore((state: any) => (state.setinViewButtonBlanket))

    useEffect(() => {
        if(inView) {
            setinViewButtonBlanket(true)
        } else {
            setinViewButtonBlanket(false)
        }
    }, [inView])

    const mobileCofX = 2
    const mobileCofY = 1

    const cofY = -.6

    return(
        <div ref={ref} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: '16'}}>
            <PageView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '17'}}>
                {/* <Float> */}
                    <group position={[width > 1024 ? (width > 1440 ? -.5 : -1) : -0.15, width > 1024 ? 0.55: 0, 0]}>
                        <BlanketModal activeNumber={blockNumber} position={[width > 576 ? -2.3 : -2.3 + mobileCofX, width > 576 ? -1.2 : -.4 + mobileCofY, -1.3]} rotation={[0.8, 3.4, 0.1]} inView={inView} containerRef={blockRef}></BlanketModal>
                        {/* <ButtonModels blockNumber={blockNumber} activeNumber={3} position={[width > 576 ? -1.85 : -1.5 + mobileCofX, width > 576 ? -.79 + cofY : -.57 + mobileCofY, 1]} rotation={[-.09, 3.5, -.14]} inView={inView} containerRef={blockRef} url='/models/green.glb'></ButtonModels>
                        <ButtonModels blockNumber={blockNumber} activeNumber={1} position={[width > 576 ? -2 : -1.65 + mobileCofX, width > 576 ? .4 + cofY : .5 + mobileCofY, 1]} rotation={[-.09, 3.5, -.15]} inView={inView} containerRef={blockRef} url='/models/orange.glb'></ButtonModels>
                        <ButtonModels blockNumber={blockNumber} activeNumber={2} position={[width > 576 ? -1.95 : -1.55 + mobileCofX, width > 576 ? -.2 + cofY: 0 + mobileCofY, 1]} rotation={[-.09, 3.5, -.14]} inView={inView} containerRef={blockRef} url='/models/yellow.glb'></ButtonModels> */}
                    </group>
                {/* </Float> */}
                <directionalLight color='white' intensity={0.5} position={[0, 0, 10]}></directionalLight>
                <ambientLight intensity={2} />
                <pointLight position={[20, 30, 10]}  intensity={1} />
                <pointLight position={[-10, -10, -10]} color='blue' />
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, width < 1440 ? (width < 1024 ? 11 : 9) : 7]} />
                <Preload all></Preload>
            </PageView>
        </div>
    )    
}