import NetworkIcons from "@/components/UI/NetworkIcons/NetworkIcons";
import { Container } from "./style";


export default function FooterNetwork({ data, title }: any) {

    return (
        <Container>
            {title ? <p className='title'>{title}</p> : null}
            <div>
                {
                    data && data?.length ?
                        data?.map((_: any, i: number) => (
                            <NetworkIcons key={i + 343} name={_.icon} href={_.href} />
                        ))
                        : null
                }
            </div>
        </Container>
    )
}