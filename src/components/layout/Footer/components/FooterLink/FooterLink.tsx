import Link from "next/link";
import { Container, LinkFooterStyle } from "./style";


export default function FooterLink({data} : any){
    const scrollToContent = (e : any, contentId : any) => {
        e.preventDefault();
      
        const content = document.getElementById(contentId);
        if (content) {
          content.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      };
    return(
        <Container>
            {
                data.length? 
                    data.map((_ : any, i : number) => (
                        <LinkFooterStyle href={_.href} key={i}>
                            {_.name}
                        </LinkFooterStyle>
                    ))
                : null
            }
        </Container>
    )
}