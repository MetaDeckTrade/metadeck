import Image from 'next/image'
import { Container, ImageNext, StyleDescription, StyleIcon, StyleName, WrapperImage } from './style'

interface Types {
    src: string,
    name: string,
    description: string
}

export default function CardsTeam({ src, name, description }: Types) {
    
    return (
        <Container>
            <ImageNext src={'/img/rectangle.webp'} width={527} height={396} alt=''/>
            <WrapperImage>
                <Image src={src} alt='' width={96} height={96} />
        
            </WrapperImage>
            <StyleName>{name}</StyleName>
            <StyleDescription>{description}</StyleDescription>
            <StyleIcon>“</StyleIcon>
        </Container>
    )
}