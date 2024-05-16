import LinkHeader from '@/components/UI/LinkHeader/LinkHeader'
import Button from '@/components/UI/Button/Button';
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useGlobalStore from '@/store/store';
import { responsive, rm } from "@/styles/utils";
import styled, { css } from "styled-components";
import { colors } from '@/styles';
import { orbitronBold } from '@/styles/fonts';

interface TypesLink {
    link: string;
    name: string;
}
const dataLink = [
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
]
export default function Header() {

    const burger = useGlobalStore(state => state.burger)
    const setburger = useGlobalStore(state => state.setburger)

    const StyleHeaderContainer = styled(animated.div)`
position: fixed;
left: 0;
top: 0;
width: 100vw;
height: ${rm(90)};
padding: ${rm(17)} ${rm(60)};
background-color: ${colors.blue1};
display: flex;
align-items: center;
gap: ${rm(20)};
justify-content: space-between;
z-index: 100;
${responsive.lg`
    padding: ${rm(17)} ${rm(40)};

    `}
    ${responsive.xsm`
    height: ${rm(60)};
    padding: ${rm(12)} ${rm(10)};
    `}
`
    const LogoWrapper = styled(Link)`
position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(8.47)};
        cursor: pointer;

        >img {
            position: relative;
            width: ${rm(72.24)};
            height: ${rm(36)};
        }

        >p {
            font-size: ${rm(32)};
            color: ${colors.white2};
            line-height: 100%;
            ${orbitronBold}
            ${responsive.xsm`
            display: none;
            `}
        }
`

    const NavigationsContainer = styled.div`
position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(60)};
        ${responsive.md`
        display: none;
        `}
`

    const NavigationsContainerMobile = styled.div`
position: relative;
align-items: center;
display: none;
gap: ${rm(60)};
${responsive.md`
        display: flex;
        `}

           
            
            
`
const SvgStyle = styled.svg`
    
    position: relative;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            user-select: none;
            height: ${rm(60)};
            width: ${rm(60)};
            flex-shrink: 0;
            display: none;
            pointer-events: all !important;
            ${responsive.md`
            display: block;
            `}
            ${responsive.xsm`
            height: ${rm(40)};
                width: ${rm(40)};
            `}
            >:nth-child(1){
        stroke-dasharray: 40 121;
            }
            >:nth-child(3){
                stroke-dasharray: 40 121;
                    }
                    >:nth-child(2){
                        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: ${colors.white1};
        stroke-width: 5.5;
        stroke-linecap: round
                    }
        ${burger ?
            
            `
                transform: rotate(45deg) !important;
                >:nth-child(1){
                    stroke-dashoffset: -68px !important;
                        }
                        >:nth-child(3){
                            stroke-dashoffset: -68px !important;
                                }

                `
            : ''
        }
`

    const [booted, setbooted] = useState(false)
    useEffect(() => {
        setbooted(true)
    }, [])
    const effect: any = useSpring({
        to: {
            y: booted ? '0%' : '-100%',
        },
        config: { duration: 1000 },
        delay: 2300
    })
    return (
        <StyleHeaderContainer style={effect}>
            <LogoWrapper href={'/'}>
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
                <SvgStyle viewBox="0 0 100 100" width="80" onClick={() => setburger(!burger)}>
                    <path d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path d="m 70,50 h -40" />
                    <path d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </SvgStyle>
            </NavigationsContainerMobile>
        </StyleHeaderContainer>
    )
}