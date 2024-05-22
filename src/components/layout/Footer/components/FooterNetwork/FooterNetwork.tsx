import NetworkIcons from "@/components/UI/NetworkIcons/NetworkIcons";
import { Container } from "./style";


export default function FooterNetwork(){

    return(
        <Container>
            <p>Join the MetaDeck Community</p>
            <div>
                <NetworkIcons name="telegram"></NetworkIcons>
                <NetworkIcons name="youtube"></NetworkIcons>
                <NetworkIcons name="twitter"></NetworkIcons>
            </div>
        </Container>
    )
}