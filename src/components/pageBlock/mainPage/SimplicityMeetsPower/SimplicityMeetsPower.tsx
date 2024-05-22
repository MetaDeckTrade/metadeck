import { useEffect, useMemo, useRef, useState } from 'react'
import { ContainerNew, Sheme, Subtitle, SubtitleDescription, Title, WrapperSybtitle, WrapperTitle } from './styleSimplicityMeetsPower'
import useInnerWidth from '@/hooks/useWidthWindow'
import { Stiky, StikyNew } from '../CompatibleWhereCounts/styleCompatibleWhereCounts';

export default function SimplicityMeetsPower() {
    const refHeight = useRef(null);
    const wrapperRefHeight = useRef(null);
    const [imageSrc, setImageSrc] = useState('/img/sheme.png');
    const widthWindow = useInnerWidth()
    useEffect(() => {
        if (widthWindow > 1440) {
            setImageSrc('/img/sheme.png')
        } else if (widthWindow <= 1440 && widthWindow > 1024) {
            setImageSrc('/img/shemelg.png')
        } else if (widthWindow <= 1024 && widthWindow > 480) {
            setImageSrc('/img/shememd.png')
        } else if (widthWindow <= 480) {
            setImageSrc('/img/shemexsm.png')
        }
    }, [widthWindow])

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
                    <WrapperTitle>
                        <Title >Simplicity Meets Power</Title>
                        <WrapperSybtitle>
                            <Subtitle>How MetaDeck Enhances Your Trading</Subtitle>
                            <SubtitleDescription>MetaDeck combines sophisticated software with robust hardware to streamline your trading. Here’s a quick look at how it integrates into your trading setup</SubtitleDescription>
                        </WrapperSybtitle>
                    </WrapperTitle>
                    <Sheme src={imageSrc} width={1808} height={697} alt='' />
                </ContainerNew>
            </StikyNew>
        </Stiky>
    )
}