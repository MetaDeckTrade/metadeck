import Image from 'next/image';
import { Table, TitleTable, WrapperText } from '../styleWrapperExplore';
import AnimatiosPharagraphTwoT from '@/components/UI/animation/animationText/AnimationPatagraphTwo/AnimationPatagraphTwo';
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react';

interface StepsInfo {
    icon: { filename: string },
    text: string,
    _uid: string
}
const TableContain = ({ dataTableList, scrollPosition }: any) => {
    const [data, setData] = useState([])
    const refWrapper = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!dataTableList || !scrollPosition || !dataTableList.length || !refWrapper?.current) { return }
        switch (scrollPosition) {
            case 1:
                refWrapper.current.textContent = dataTableList?.[0].title
                setData(dataTableList?.[0].stepsInfo)
                break
            case 2:
                refWrapper.current.textContent = dataTableList?.[1].title
                setData(dataTableList?.[1].stepsInfo)
                break
            case 3:
                refWrapper.current.textContent = dataTableList?.[2].title
                setData(dataTableList?.[2].stepsInfo)
                break
            default:
                refWrapper.current.textContent = dataTableList?.[0].title
                setData(dataTableList?.[0].stepsInfo)
                break
        }
    }, [dataTableList, scrollPosition, refWrapper])
    return (
        <>
            <TitleTable ref={refWrapper}>5 / 15</TitleTable>
            <Table>
                {
                    data && data.length ?
                        data.map((_: StepsInfo, i: number) => (
                            <WrapperText key={_._uid}>
                                {
                                    _?.icon && _?.icon?.filename ?
                                        <Image className='icon' src={_?.icon?.filename} width={16} height={16} alt='' />
                                        : null
                                }
                                <AnimatiosPharagraphTwoT delay={50 * (i + 1)} duration={300} key={i} text={_.text}></AnimatiosPharagraphTwoT>
                            </WrapperText>
                        ))
                        : null
                }
            </Table>
        </>

    )
}

export default memo(TableContain)