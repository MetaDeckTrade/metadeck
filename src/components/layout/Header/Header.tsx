import LinkHeader from '@/components/UI/LinkHeader/LinkHeader'
import Button from '@/components/UI/Button/Button';
import { useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useGlobalStore from '@/store/store';
import { LogoWrapper, NavigationsContainer, NavigationsContainerMobile, StyleHeaderContainer, SvgStyle } from './styleHeadet';
import { lenis } from '@/layouts/ScrollLayout/ScrollLayout';

interface TypesLink {
    link: string;
    name: string;
}
const dataLink = [
    {
        link: '#advantage',
        name: 'why',
    },
    {
        link: '#explore',
        name: 'explore',
    },
    {
        link: '#how',
        name: 'how',
    },
    {
        link: '#contact',
        name: 'community',
    },
]
export default function Header() {

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
        <StyleHeaderContainer style={effect}>
            <LogoWrapper onClick={() => lenis.current?.scrollTo('#about')}>
                <Image src={'/img/subtract.svg'} width={72.24} height={36} alt='logo' />
                <p >Meta Deck</p>
            </LogoWrapper>
            <NavigationsContainer>
                {
                    dataLink?.length ?
                        dataLink.map((_: TypesLink, i: number) => {
                            if (_.link && _.name) {
                                return <LinkHeader name={_.name} href={_.link} key={i} />;
                            }
                            return null;
                        })
                        : null
                }
                <Button header={true} color={'yellow'}  name='Order Now' />
            </NavigationsContainer>
            <NavigationsContainerMobile>
                <Button header={true} name='Order Now' color={'yellow'} />
                <SvgStyle burger={burger} viewBox="0 0 100 100" width="80" onClick={() => setburger(!burger)}>
                    <path d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path d="m 70,50 h -40" />
                    <path d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </SvgStyle>
            </NavigationsContainerMobile>
        </StyleHeaderContainer>
    )
}