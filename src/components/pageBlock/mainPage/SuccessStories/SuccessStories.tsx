import CardsTeam from '@/components/UI/CardsTeam/CardsTeam'
import { Container, WrapperSubtitle } from './style'

interface CardTypes {
    description: string,
    name: string,
    img: { filename: string }
}

interface TypesData {
    description: string,
    subtitle: string,
    title: string,
    card: Array<CardTypes>,
    hide: boolean
}

export default function SuccessStories({ data }: { data: TypesData }) {
    return (
        <>
            {
                !data?.hide ?
                    <Container id='success'>
                        <div >
                            {data?.title ? <h1>{data.title}</h1> : null}
                            <WrapperSubtitle>
                                {data?.subtitle ? <p className='dataSubtitle'>{data?.subtitle}</p> : null}
                                {data?.description ? <p className='dataDescription'>{data?.description}</p> : null}
                            </WrapperSubtitle>
                        </div>
                        <div>
                            {
                                data?.card && data?.card?.length ?
                                    data?.card?.map((_: CardTypes, i: number) => (
                                        <CardsTeam key={i} src={_.img.filename} name={_.name} description={_.description} />
                                    ))
                                    : null
                            }
                        </div>
                    </Container>
                    : null
            }
        </>
    )
}