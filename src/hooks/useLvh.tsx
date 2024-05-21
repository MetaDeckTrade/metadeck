/**
 * @fileoverview Sets full device screen height to html tag for CSS use
 */

import { useEffect } from "react"

const isInstagram = () => {
    // @ts-expect-error
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf('Instagram') > -1) ? true : false;
}
export const useLvh = () => {
    useEffect(() => {
        // let rq: any
        // let startTime = performance.now()
        // window.addEventListener('resize', update)
        // render(0)
        // function render( time: number ) {
        //     if (time - startTime > 100) {
        //         update()
        //         startTime = performance.now()
        //     }
        //     // rq = requestAnimationFrame(render)
        // }
        renderOnIg()
        function renderOnIg() {
            if (isInstagram()) {
                update()
                
            }
            const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if (isChrome) {
                update()
            }
        }
        function update() {
            const bottomMenuOffset = 0 //px
            const vh = (window.outerHeight + bottomMenuOffset) * 0.01;
            if (window.innerWidth > 576) {
                document.documentElement.style.removeProperty('--vh');
            } else
            if (document.documentElement.style.getPropertyValue('--vh') !== `${vh}px`) {
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
        }
        // return () =>  { window.removeEventListener('resize', update); cancelAnimationFrame(rq) }
    }, [])
}

export const Lvh = () => {
    useLvh()
    return null
}