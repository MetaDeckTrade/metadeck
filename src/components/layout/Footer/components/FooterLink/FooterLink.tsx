import Link from "next/link";
import { Container, LinkFooterStyle } from "./style";
import { lenis } from "@/layouts/ScrollLayout/ScrollLayout";


export default function FooterLink({data} : any){
    
    const handleClick = (item: any) => {
        if(item?.href){
            window.open(item.href, '_blank');
            return
        }
        if ( item?.anchor) {
            lenis.current?.scrollTo(item.anchor)
        }
    }
    return(
        <Container>
            {
                data?.length? 
                    data.map((_ : any, i : number) => (
                        <LinkFooterStyle onClick={() => handleClick(_)} key={i}>
                            {_.name}
                        </LinkFooterStyle>
                    ))
                : null
            }
        </Container>
    )
}