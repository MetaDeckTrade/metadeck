import useGlobalStore from "@/store/store"
import { useEffect } from "react";
import LinkHeader from "@/components/UI/LinkHeader/LinkHeader";
import { useSpring } from "@react-spring/web";
import Button from "@/components/UI/Button/Button";
import NetworkIcons from "@/components/UI/NetworkIcons/NetworkIcons";
import { Container, WrapperNetwork } from "./style";
const dataLink = [
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
    {
        link: '/',
        name: 'menu',
    },
]
interface TypesLink {
    link: string;
    name: string;
}
export default function Burger(){
    const burger = useGlobalStore(state => state.burger)

    useEffect(() => {
        if (burger) {
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';
            document.documentElement.style.position = 'relative';
        } else {
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.documentElement.style.position = '';
        }
    }, [burger]);

    const effect: any = useSpring({
        to: {
            y: burger ? '0%' : '-100%',
        },
        config: { duration: 700 },

    })

    return(
        <Container style={effect}>
            <div>
                {
                    dataLink?.length ?
                        dataLink.map((_: TypesLink, i: number) => {
                            if (_.link && _.name) {
                                return <LinkHeader name={_.name} href={_.link} key={i} />;
                            }
                            return null;
                        })
                        : null
                }
            </div>
            <p >Experience precision at the push of a button</p>
            <Button name='Order Now' burger={true}  color="yellow"/>
            <WrapperNetwork>
                <NetworkIcons name="telegram"/>
                <NetworkIcons name="youtube"/>
                <NetworkIcons name="twitter"/>
            </WrapperNetwork>
        </Container>
    )
}