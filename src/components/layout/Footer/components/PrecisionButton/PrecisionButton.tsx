import Button from "@/components/UI/Button/Button";
import { Container } from "./style";


export default function PrecisionButton({ data }: any) {

    return (
        <Container>
            {data?.subtitle ? <p className="subtitle">{data?.subtitle}</p> : null}
            {data?.button && data?.button?.length ?
                data?.button?.map((_: any, i: number) => (
                    <Button key={i + 99} header={true} href={_.href} anchor={_.anchor} color={_.style} name={_.name} />
                ))
                : null
            }
        </Container>
    )
}