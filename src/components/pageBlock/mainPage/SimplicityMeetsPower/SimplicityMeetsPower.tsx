import { useEffect, useRef, useState } from 'react'
import { Con, Container, ContainerNew, Sheme, Subtitle, SubtitleDescription, Title, WrapperSybtitle, WrapperTitle } from './styleSimplicityMeetsPower'
import useInnerWidth from '@/hooks/useWidthWindow'
import { NativeUnderpin } from '@/components/UI/NativeUnderpin/NativeUnderpin';
import SuccessStories from '../SuccessStories/SuccessStories';
import JoinMetaDeckCommunity from '../JoinMetaDeckCommunity/JoinMetaDeckCommunity';
import { Stiky, StikyNew } from '../CompatibleWhereCounts/styleCompatibleWhereCounts';

export default function SimplicityMeetsPower() {
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

    const outerRef = useRef(null)
    const pinSpacerRef = useRef(null)


    return (
        <Stiky>
            <StikyNew>
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