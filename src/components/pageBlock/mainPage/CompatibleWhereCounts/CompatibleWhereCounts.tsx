import { useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CompatibleWhereCountsStyleNew, Stiky, StikyNew, SwiperSlideImage, Text } from './styleCompatibleWhereCounts'
import useInnerWidth from '@/hooks/useWidthWindow';

interface TypesString {
    filename: string
}

interface Types {
    subtitle: string,
    swiper: Array<TypesString>,
    title: string
}

export default function CompatibleWhereCounts({ data }: { data: Types }) {
    const stickyRef: any = useRef(null);
    const refHeight = useRef(null);
    const wrapperRefHeight = useRef(null);

    const innerWidth = useInnerWidth()
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
    }, [wrapperRefHeight, refHeight, innerWidth])
    return (
        <>
            {
                data ?
                    <Stiky ref={wrapperRefHeight}>
                        <StikyNew ref={refHeight}>
                            <CompatibleWhereCountsStyleNew ref={stickyRef} >
                                {data?.title ? <h1>{data?.title}</h1> : null}
                                {
                                    data?.subtitle ?
                                        <Text>
                                            <p>{data?.subtitle}</p>
                                        </Text>
                                        : null
                                }
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={'auto'}
                                    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                    speed={3000}
                                    loop={true}
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    className={'mySwiperTheyTrustUs'}
                                >
                                    {
                                        data?.swiper && data.swiper.length ?
                                            data?.swiper?.map((_: TypesString, i: number) => (
                                                <SwiperSlide key={i}>
                                                    <SwiperSlideImage src={_.filename} width={300} height={200} alt='' />
                                                </SwiperSlide>
                                            ))
                                            : null
                                    }
                                </Swiper>
                            </CompatibleWhereCountsStyleNew>
                        </StikyNew>
                    </Stiky>
                    : null
            }
        </>

    )
}