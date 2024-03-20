import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('@/layouts/CanvasLayout/components/Examples').then((mod) => mod.Logo), { ssr: false })
const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,
    loading: () => (<div>Loading Page Scene...</div>),
})
const Common = dynamic(() => import('@/layouts/CanvasLayout/components/Common').then((mod) => mod.Common), { ssr: false })


export default function Home() {
    return (
        <>
            <Head>
                <title key="title">Main Page</title>
            </Head>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <PageView>
                    <Suspense fallback={null}>
                        <Logo scale={0.6} position={[0, 0, 0]} />
                        <Common />
                    </Suspense>
                </PageView>
            </div>
        </>
    )
}
