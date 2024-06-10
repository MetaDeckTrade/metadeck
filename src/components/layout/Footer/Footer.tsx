import { useInView } from "@/hooks/useInView";
import { useButtonScroll } from "../ScrollDown/ScrollDown";
import EmailFooter from "./components/EmailFooter/EmailFooter";
import FooterLink from "./components/FooterLink/FooterLink";
import FooterNetwork from "./components/FooterNetwork/FooterNetwork";
import LogoFooterInfo from "./components/LogoFooterInfo/LogoFooterInfo";
import PrecisionButton from "./components/PrecisionButton/PrecisionButton";
import { Container } from "./style";
import { useEffect, useMemo } from "react";

interface Typeslink{
    anchor: string,
    href: string,
    name: string
}

interface Types {
    footerNetworkTitle: string,
    link: Array<Typeslink>,
    logo: any,
    network: any,
    precisionButton: any,
    reverseAnswerEmail: any,
    reverseAnswerTitle: string
}

export default function Footer({data} : {data : Types}) {
    //@ts-expect-error
    const { setIsBottom } = useButtonScroll()
    const [ ref, inView ] = useInView()
    useEffect(() => {
        if(inView){
            setIsBottom(true)
        } else {
            setIsBottom(false)
        }
    },[inView])

    const dataFooterLink1 = useMemo(() => {
        if(!data?.link || !data?.link.length) {return}
        const dataNew = data?.link.filter((_, i) => i % 2)
        return dataNew
    },[data])
    const dataFooterLink2 = useMemo(() => {
        if(!data?.link || !data?.link.length) {return}
        const dataNew = data?.link.filter((_, i) => !(i % 2))
        return dataNew
    },[data])

    return(
        <Container ref={ref}>
            <LogoFooterInfo data={data?.logo?.[0]}/>
            <PrecisionButton data={data?.precisionButton?.[0]}/>
            <FooterLink data={dataFooterLink1}/>
            <FooterLink data={dataFooterLink2}/>
            <EmailFooter data={data?.reverseAnswerEmail} title={data?.reverseAnswerTitle}/>
            <FooterNetwork data={data?.network} title={data?.footerNetworkTitle}/>
        </Container>
    )
}