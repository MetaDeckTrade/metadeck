import * as THREE from 'three'
import { useRef } from 'react'

import { r3f } from './components/Three'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { useControls, Leva } from 'leva'

import { ThreeScope } from '@/hooks/useThreeScope'


// Everything defined in here will persist between route changes, only children are swapped
const CanvasLayout = ({ children }: any) => {
    const ref = useRef()
    
    return (
        <div
            // @ts-expect-error
            ref={ref}
            style={{
                position: 'relative',
                width: ' 100%',
                height: '100%',
                minHeight: 'calc(var(--vh, 1vh) * 100)',
                zIndex: 100,
            }}
        >
            {children}
            <Canvas 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: 'calc(var(--vh, 1vh) * 100)',
                    pointerEvents: 'none',
                    zIndex: 101
                }}
                gl={{
                    powerPreference: "high-performance",
                    alpha: true,
                    antialias: true,
                }}
                // @ts-expect-error
                eventSource={ref}
                eventPrefix='client'
            >
                {/* @ts-ignore */}
                <r3f.Out />
                <Preload all />
                <ThreeScope/>
            </Canvas>
            <Leva hidden={false} />
        </div>
    )
}

export { CanvasLayout }