import LinkHeader from '@/components/UI/LinkHeader/LinkHeader'
import Button from '@/components/UI/Button/Button';
import { useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useGlobalStore from '@/store/store';
import { LogoWrapper, NavigationsContainer, NavigationsContainerMobile, StyleHeaderContainer, SvgStyle } from './styleHeadet';
import { lenis } from '@/layouts/ScrollLayout/ScrollLayout';

interface Navigation {
    anchor: string,
    href: string,
    name: string,
    style?: string
}

interface Types {
    button: Array<Navigation>,
    navigation: Array<Navigation>,
    logoIcon: { filename: string | any },
    logoTitle: string,
}

export default function Header({ data }: { data: Types | null }) {

    const burger = useGlobalStore(state => state.burger)
    const setburger = useGlobalStore(state => state.setburger)
    const [booted, setbooted] = useState(false)

    useEffect(() => {
      
        setbooted(true)
    }, [])

    const effect: any = useSpring({
        to: {
            y: booted ? '0%' : '-100%',
        },
        config: { duration: 1000 },
        delay: 1000
    })

    return (
        <>
            {
                data ?
                    <StyleHeaderContainer style={effect}>
                        <LogoWrapper onClick={() => lenis.current?.scrollTo('#about')}>
                            {
                                data?.logoIcon?.filename ?
                                    <Image className='logoIcon' priority src={data?.logoIcon?.filename} width={72.24} height={36} alt='logo' />
                                    : null
                            }
                            {data?.logoTitle ? <p className='logo'>{data?.logoTitle}</p> : null}
                        </LogoWrapper>
                        <NavigationsContainer>
                            {
                                data?.navigation && data?.navigation?.length ?
                                    data?.navigation.map((_: Navigation, i: number) => (
                                        <LinkHeader name={_.name} anchor={_.anchor} href={_.href} key={i} />
                                    ))
                                    : null
                                
                            }
                            {data.button && data.button.length ?
                                data.button.map((_: Navigation, i: number) => (
                                    <Button key={i + 99} header={true} href={_.href} anchor={_.anchor} color={_.style} name={_.name} />
                                ))
                                : null
                            }
                        </NavigationsContainer>
                        <NavigationsContainerMobile>
                            {data.button && data.button.length ?
                                data.button.map((_: Navigation, i: number) => (
                                    <Button key={i + 99} header={true} href={_.href} anchor={_.anchor} color={_.style} name={_.name} />
                                ))
                                : null
                            }
                            <SvgStyle burger={burger} viewBox="0 0 100 100" width="80" onClick={() => setburger(!burger)}>
                                <path d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                                <path d="m 70,50 h -40" />
                                <path d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                            </SvgStyle>
                        </NavigationsContainerMobile>
                    </StyleHeaderContainer>
                    : null
            }
        </>

    )
}