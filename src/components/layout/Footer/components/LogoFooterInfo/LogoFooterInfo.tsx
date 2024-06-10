import Image from "next/image";
import { Container, ContainerWrapperLogoMobile, StylePMobile, WrapperDescription, WrapperLogo } from "./style";
import useInnerWidth from "@/hooks/useWidthWindow";


export default function LogoFooterInfo({data} : any) {
    const innerWidth = useInnerWidth()

    return (
        <Container>
            {
                innerWidth <= 576 ?
                    <>
                        <ContainerWrapperLogoMobile>
                            <WrapperLogo>
                                <Image className="logo" src={ data?.logo?.filename ? data?.logo?.filename : '/img/subtract.svg'} width={50} height={25} alt="" />
                                {data?.logoName ?<p className="logoName">{data?.logoName}</p> : null}
                            </WrapperLogo>
                            {data?.copyrightNotice ? <p>{data?.copyrightNotice}</p> : null}
                        </ContainerWrapperLogoMobile>
                        {data?.appeal ? <StylePMobile>{data?.appeal}</StylePMobile> : null} 
                    </>
                    :
                    <>
                        <WrapperLogo>
                            <Image src={ data?.logo?.filename ? data?.logo?.filename : '/img/subtract.svg'} width={50} height={25} alt="" />
                            {data?.logoName ?<p className="logoName">{data?.logoName}</p> : null}
                        </WrapperLogo>
                        <WrapperDescription>
                            {data?.appeal ?<p>{data?.appeal}</p> : null}
                            {data?.copyrightNotice ? <p>{data?.copyrightNotice}</p> : null}
                        </WrapperDescription>
                    </>

            }

        </Container>
    )
}