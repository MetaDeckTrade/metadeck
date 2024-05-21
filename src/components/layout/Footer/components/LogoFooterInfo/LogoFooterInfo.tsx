import Image from "next/image";
import { Container, ContainerWrapperLogoMobile, StylePMobile, WrapperDescription, WrapperLogo } from "./style";
import useInnerWidth from "@/hooks/useWidthWindow";
import { useEffect } from "react";


export default function LogoFooterInfo() {
    const innerWidth = useInnerWidth()

    return (
        <Container>
            {
                innerWidth <= 576 ?
                    <>
                        <ContainerWrapperLogoMobile>
                            <WrapperLogo>
                                <Image src={'/img/subtract.svg'} width={50} height={25} alt="" />
                                <p>Meta Deck</p>
                            </WrapperLogo>
                            <p>© Meta Deck 2024</p>
                        </ContainerWrapperLogoMobile>
                        <StylePMobile>Welcome to the future of crypto trading.</StylePMobile>
                    </>
                    :
                    <>
                        <WrapperLogo>
                            <Image src={'/img/subtract.svg'} width={50} height={25} alt="" />
                            <p>Meta Deck</p>
                        </WrapperLogo>
                        <WrapperDescription>
                            <p>Welcome to the future of crypto trading. </p>
                            <p>© Meta Deck 2024</p>
                        </WrapperDescription>
                    </>

            }

        </Container>
    )
}