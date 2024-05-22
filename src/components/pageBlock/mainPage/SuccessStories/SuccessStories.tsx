import CardsTeam from '@/components/UI/CardsTeam/CardsTeam'
import { Container, WrapperSubtitle } from './style'

const dataCards = [
    {
        src: '/img/icon.png',
        name: 'Jacob Smith',
        description: 'Traders worldwide are transforming their strategies with MetaDeck. Here’s what they have to say.'
    },
    {
        src: '/img/icon.png',
        name: 'William Brown',
        description: 'Traders worldwide are transforming their strategies with MetaDeck. Here’s what they have to say.'
    },
    {
        src: '/img/icon.png',
        name: 'James Davis',
        description: 'Traders worldwide are transforming their strategies with MetaDeck. Here’s what they have to say.'
    },
]
interface Types {
    src: string,
    name: string,
    description: string
}
export default function SuccessStories() {
    return (
        <Container id='support'>
            <div >
                <h1>Success Stories</h1>
                <WrapperSubtitle>
                    <p >Don’t Just Take Our Word for It</p>
                    <p>Traders worldwide are transforming their strategies with MetaDeck. Here’s what they have to say:</p>
                </WrapperSubtitle>
            </div>
            <div>
                {
                    dataCards.map((_: Types, i: number) => (
                        <CardsTeam key={i} src={_.src} name={_.name} description={_.description} />
                    ))
                }
            </div>
        </Container>
    )
}