import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { OrbitControls, View as ViewImpl } from '@react-three/drei'
import { Three } from './Three'
import { useIsomorphicLayoutEffect } from '@react-spring/web'

const style = {
    position: 'relative',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
}

const PageView = forwardRef(({ children, orbit, ...props }: any, ref) => {
  const localRef = useRef(null)
  const targetRef = useRef<HTMLElement | null>(null)
  useImperativeHandle(ref, () => localRef.current)


  return (
    <>
      <div ref={localRef} style={style} {...props} />
      <Three>
        <ViewImpl 
          // @ts-expect-error
          track={localRef}
        >
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
PageView.displayName = 'PageView'

export { PageView }
