import { MutableRefObject, useCallback, useRef, useState } from "react"
import { useLoop } from "./useLoop"

export const useInView = (): [MutableRefObject<HTMLDivElement | null | any>, boolean] => {
    const inViewRef = useRef(false)
    const [inView, _setInView] = useState(false)
    const setInView = useCallback((inView: boolean) => {
        if (inViewRef.current !== inView) {
            _setInView(inView)
            inViewRef.current = inView
        }
    }, [])
    const ref = useRef<HTMLElement | null>(null)
    
    useLoop(() => {
        if (!ref.current) { return }
        setInView(isElementPartableVisible(ref.current))
    }, { framerate: 10 })

    return [ref, inView]
}

const getElementDocumentCoords = (domElement: HTMLElement) => {
    if (!domElement) {
        console.error('getElementDocumentCoords: no domElement found')
        return {
            top: null,
            bottom: null,
            left: null,
            right: null,
            height: null,
            width: null
        }
    }
    return {
        top: domElement.getBoundingClientRect().top + window.scrollY,
        bottom: domElement.getBoundingClientRect().bottom + window.scrollY,
        left: domElement.getBoundingClientRect().left + window.scrollX,
        right: domElement.getBoundingClientRect().right + window.scrollX,
        height: domElement.getBoundingClientRect().height,
        width: domElement.getBoundingClientRect().width,
    }
}

const isElementVisible = (domElement: HTMLElement) => {
    const domElementCoords = getElementDocumentCoords(domElement)
    if (domElementCoords.top === null || domElementCoords.bottom === null ||
        domElementCoords.left === null || domElementCoords.right === null ||
        domElementCoords.height === null || domElementCoords.width === null) {
        console.error("isElementVisible: No domElement found")
        return {
            partable: {
                x: false,
                y: false
            },
            fully: {
                x: false,
                y: false
            }
        }
    }
    return {
        partable: {
            x: domElementCoords.right >= 0 && domElementCoords.left <= window.innerWidth,
            y: domElementCoords.bottom >= window.scrollY && domElementCoords.top <= window.scrollY + window.innerHeight
        },
        fully: {
            x: domElementCoords.right <= window.innerWidth && domElementCoords.left >= 0,
            y: domElementCoords.bottom <= window.scrollY + window.innerHeight && domElementCoords.top >= window.scrollY
        }
    }
}

const isElementPartableVisibleX = (domElement: HTMLElement) => {
    return isElementVisible(domElement).partable.x
}
const isElementPartableVisibleY = (domElement: HTMLElement) => {
    return isElementVisible(domElement).partable.y
}
const isElementPartableVisible = (domElement: HTMLElement) => {
    return (isElementPartableVisibleX(domElement) && isElementPartableVisibleY(domElement))
}