import Button from "@/components/UI/Button/Button";
import { Container } from "./style";


export default function PrecisionButton() {

    return(
        <Container>
            <p>Experience precision at the push of a button</p>
            <Button color='yellow' name="Order Now"></Button>
        </Container>
    )
}