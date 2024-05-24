import { useEffect, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CompatibleWhereCountsStyle, CompatibleWhereCountsStyleNew, Stiky, StikyNew, SwiperSlideImage, Text } from './styleCompatibleWhereCounts'
import { NativeUnderpin } from '@/components/UI/NativeUnderpin/NativeUnderpin';
import useInnerWidth from '@/hooks/useWidthWindow';

export default function CompatibleWhereCounts() {
    const stickyRef: any = useRef(null);
    const refHeight = useRef(null);
    const wrapperRefHeight = useRef(null);
    useEffect(() => {
        const calculateStickyHeight = () => {
            if (stickyRef.current) {
                const stickyElement: any = stickyRef.current;
                const { height } = stickyElement.getBoundingClientRect();

                const parentElement = stickyElement.parentElement;
                if (parentElement) {
                    // parentElement.style.paddingBottom = `${height}px`;
                }
            }
        };

        calculateStickyHeight();
        window.addEventListener('resize', calculateStickyHeight);

        return () => {
            window.removeEventListener('resize', calculateStickyHeight);
        };
    }, []);

    const swiperLength = [
        { src: '/img/swiper1.png' }, { src: '/img/swiper2.png' }, { src: '/img/swiper3.png' }, { src: '/img/swiper4.png' }, { src: '/img/swiper5.png' },
        { src: '/img/swiper1.png' }, { src: '/img/swiper2.png' }, { src: '/img/swiper3.png' }, { src: '/img/swiper4.png' }, { src: '/img/swiper5.png' },
    ]
    // const CompatibleWhereCountst = forwardRef((props, ref) => (
    //     <CompatibleWhereCounts ref={ref} {...props} />
    //   ));
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
        <Stiky ref={wrapperRefHeight}>
            <StikyNew ref={refHeight}>
                <CompatibleWhereCountsStyleNew ref={stickyRef} >
                    <h1>Compatible Where it Counts</h1>
                    <Text>
                        <p>MetaDeck seamlessly integrates with numerous high-profile platforms and services to ensure your trading is as efficient as possible. Compatible with:</p>
                    </Text>
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
                            swiperLength.map((_: any, i: number) => (
                                <SwiperSlide key={i}>
                                    <SwiperSlideImage src={_.src} width={300} height={200} alt='' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </CompatibleWhereCountsStyleNew>
            </StikyNew>
        </Stiky>
    )
}