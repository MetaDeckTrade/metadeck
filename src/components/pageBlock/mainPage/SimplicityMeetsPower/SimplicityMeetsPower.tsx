import { useMemo, useRef, memo } from 'react'
import { ContainerNew, Title } from './styleSimplicityMeetsPower'
import useInnerWidth from '@/hooks/useWidthWindow'
import { Stiky, StikyNew } from '../CompatibleWhereCounts/styleCompatibleWhereCounts';
import { TypesSimplicity } from '../WrapperExplore/WrapperExplore';
import Image from 'next/image';

function SimplicityMeetsPower({ data }: { data: TypesSimplicity }) {
    const refHeight = useRef(null);
    const wrapperRefHeight = useRef(null);
    const widthWindow = useInnerWidth()
    console.log(data)
    useMemo(() => {
        if (!wrapperRefHeight.current || !refHeight.current) { return }
        //@ts-expect-error
        const newHeight = refHeight.current.getBoundingClientRect().height
        if (newHeight) {
            //@ts-expect-error
            wrapperRefHeight.current.style.height = `${newHeight * 2}px`
            //@ts-expect-error
            wrapperRefHeight.current.style.marginTop = `-${newHeight}px`
        }
    }, [wrapperRefHeight, refHeight, widthWindow])

    return (
        <Stiky ref={wrapperRefHeight}>
            <StikyNew ref={refHeight}>
                <ContainerNew>
                    {data?.title ? <Title>{data?.title}</Title> : null}
                    <div className='wrapperListWorks'>
                        {
                            data?.worksList?.length ?
                                data.worksList.map((_: any, i: number) => (
                                    <div key={i + 3111} className='wrapperCard'>
                                        <div key={i + 34} className='containerCards'>
                                            <div className='img'>
                                            <Image  src={_.img?.filename} width={435} height={320} alt='' />
                                            </div>
                                            <div className={`textContainer`}>
                                                <p>{_.description}</p>
                                            </div>
                                        </div>
                                        <div className='wrapperLine'>
                                        <svg className='line' width="2" height="697" viewBox="0 0 2 697" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.6" d="M1.00003 697L1 0" stroke="url(#paint0_linear_1001_819)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1001_819" x1="0.284455" y1="3.87464" x2="2.95535" y2="697.543" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#001A41" stop-opacity="0" />
                                                    <stop offset="0.505" stop-color="#001A41" />
                                                    <stop offset="1" stop-color="#001A41" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        </div>
                                    </div>
                                ))
                                : null
                        }
                    </div>
                </ContainerNew>
            </StikyNew>
        </Stiky>
    )
}

export default memo(SimplicityMeetsPower)