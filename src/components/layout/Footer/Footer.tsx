import { useInView } from "react-intersection-observer";
import { useButtonScroll } from "../ScrollDown/ScrollDown";
import EmailFooter from "./components/EmailFooter/EmailFooter";
import FooterLink from "./components/FooterLink/FooterLink";
import FooterNetwork from "./components/FooterNetwork/FooterNetwork";
import LogoFooterInfo from "./components/LogoFooterInfo/LogoFooterInfo";
import PrecisionButton from "./components/PrecisionButton/PrecisionButton";
import { Container } from "./style";
import { useEffect } from "react";
const dataFooterLink1 = [
    { href : '#about', name : 'About Meta Deck'},
    { href : '#advantage', name : 'advantage'},
    { href : '#compatibility', name : 'Compatibility'},
]
const dataFooterLink2 = [
    { href : '/', name : 'private policy'},
    { href : '#support', name : 'support'},
    { href : '#contact', name : 'Contact'},
]
export default function Footer() {
    //@ts-expect-error
    const { setIsBottom } = useButtonScroll()
    const { ref, inView } = useInView()
    useEffect(() => {
        if(inView){
            setIsBottom(true)
        } else {
            setIsBottom(false)
        }
    },[inView])

    return(
        <Container ref={ref}>
            <LogoFooterInfo />
            <PrecisionButton />
            <FooterLink data={dataFooterLink1}/>
            <FooterLink data={dataFooterLink2}/>
            <EmailFooter />
            <FooterNetwork />
        </Container>
    )
}