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
                            <Email key={i} href={_.link || '/'} onClick={(e) => {_.link ? null : e.preventDefault(), _?.token && navigator.clipboard.writeText(_?.token)} } target="_blank">
                                {_?.icon?.filename ?
                                    <ImageMy className="icon" src={_?.icon?.filename} width={20} alt="" height={20} />
                                    : null}
                                <span className={"wrapperEmail"}>
                                    {_.name ? <p className={'text'}>{_.name}</p> : null}
                                    {_.token ? <p className={'text' + ' ' + 'textToken'}>{_.token.slice(0, 10)}...${_.token.slice(-8)}</p> : null}
                                </span>
                            </Email>
                        ))
                        : null
                }
            </div>
        </Container>
    )  
}