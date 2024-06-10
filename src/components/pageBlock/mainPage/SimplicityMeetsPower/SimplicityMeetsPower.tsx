import { useEffect, useMemo, useRef, useState } from 'react'
import { ContainerNew, Sheme, Subtitle, SubtitleDescription, Title, WrapperSybtitle, WrapperTitle } from './styleSimplicityMeetsPower'
import useInnerWidth from '@/hooks/useWidthWindow'
import { Stiky, StikyNew } from '../CompatibleWhereCounts/styleCompatibleWhereCounts';
import { TypesSimplicity } from '../WrapperExplore/WrapperExplore';

export default function SimplicityMeetsPower({data} : {data : TypesSimplicity}) {
    const refHeight = useRef(null);
    const wrapperRefHeight = useRef(null);
    const [imageSrc, setImageSrc] = useState('/img/sheme.png');
    const widthWindow = useInnerWidth()
    // Rectangle 7933
    useEffect(() => {
        if (widthWindow > 1440) {
            setImageSrc(data?.imgDesktop?.filename || '/img/Rectangle7933.png')
        } else if (widthWindow <= 1440 && widthWindow > 1024) {
            setImageSrc(data?.imgLaptop?.filename || '/img/Rectangle7933.png')
        } else if (widthWindow <= 1024 && widthWindow > 480) {
            setImageSrc(data?.imgTablet?.filename || '/img/Rectangle7933.png')
        } else if (widthWindow <= 480) {
            setImageSrc(data?.imgMobile?.filename || '/img/Rectangle7933.png')
        }
    }, [widthWindow, data])

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
        <Stiky id="how" ref={wrapperRefHeight}>
            <StikyNew ref={refHeight}>
            <ContainerNew>
                    <WrapperTitle>
                        {data?.title ? <Title >{data?.title}</Title> : null}
                        <WrapperSybtitle>
                            {data?.subtitle ? <Subtitle>{data?.subtitle}</Subtitle> : null}
                            {data?.description ? <SubtitleDescription>{data?.description}</SubtitleDescription> : null}
                        </WrapperSybtitle>
                    </WrapperTitle>
                    <Sheme src={imageSrc} width={1808} height={697} alt='' />
                </ContainerNew>
            </StikyNew>
        </Stiky>
    )
}