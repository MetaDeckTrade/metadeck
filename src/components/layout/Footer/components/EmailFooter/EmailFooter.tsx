import ImageMy from "@/components/UI/ImageMy/ImageMy";
import { Container, Email } from "./style";


export default function EmailFooter({ data, title }: any) {

    return (
        <Container>
            {title ? <p className="title">{title}</p> : null}
            <div>
                {
                    data && data?.length ?
                        data?.map((_: any, i: number) => (
                            <Email key={i} href={_.link || '/'} target="_blank">
                                {_?.icon?.filename ? 
                                    <ImageMy className="icon" src={_?.icon?.filename} width={20} alt="" height={20} />
                                : null}
                                {_.name ? <p>{_.name}</p> : null} 
                            </Email>
                        ))
                        : null
                }
            </div>
        </Container>
    )
}