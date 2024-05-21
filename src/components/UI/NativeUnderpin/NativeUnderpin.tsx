import { update } from '@react-spring/web';
import { ReactNode, createContext, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
interface Types {
    amplitude? : number,
    top? : number,
    children?: ReactNode
}
interface NativeContextType {
    update: () => void;
  }

export const NativeContext = createContext<NativeContextType | undefined>(undefined)

export const NativeUnderpin = ({ amplitude = 1, top = 0, children } : Types) => {

    const parent = useRef<HTMLDivElement>(null)
    const pinned = useRef<HTMLDivElement>(null)
    function update() {
        if (!parent.current || !pinned.current) { return }
        const height = pinned.current.getBoundingClientRect().height
        if (window.innerWidth > 480) {
            parent.current.style.position = `relative`
            parent.current.style.height = `${height + window.outerHeight * amplitude}px`
            parent.current.style.marginBottom = `${-(window.outerHeight * amplitude)}px`

            const point = window.outerHeight < height ? window.outerHeight - height : -0

            pinned.current.style.cssText = `position: sticky; top: ${point + Math.sign(point) * window.outerHeight * top}px; left: 0;`
        } else {
            pinned.current.style.cssText = ``
            parent.current.style.cssText = ``
        }
    }
    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])
    return (
        <NativeContext.Provider value={{ update: update}}>
            <div ref={parent}>
                <div ref={pinned}>
                    {children}
                </div>
            </div>
        </NativeContext.Provider>

    )
}

export const useNative = () => {
    const value = useContext(NativeContext)
    return value
}