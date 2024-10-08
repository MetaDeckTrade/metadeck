import useGlobalStore from "@/store/store"
import { useEffect } from "react";
import LinkHeader from "@/components/UI/LinkHeader/LinkHeader";
import { easings, useSpring } from "@react-spring/web";
import Button from "@/components/UI/Button/Button";
import NetworkIcons from "@/components/UI/NetworkIcons/NetworkIcons";
import { Container, WrapperNetwork } from "./style";

export default function Burger({ dataHeader, dataFooter, dataNetwork }: any) {
    const burger = useGlobalStore(state => state.burger)
    const setBurger = useGlobalStore(state => state.setburger)

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
        config: { duration: 500, easing: easings.easeOutCubic },
    })

    return (
        <Container style={effect}>
            <div>
                {
                    dataHeader?.navigation && dataHeader?.navigation?.length ?
                        dataHeader?.navigation.map((_: any, i: number) => (
                            <LinkHeader onClick={() => { setBurger(false) }} name={_.name} anchor={_.anchor} href={_.href} key={i} />
                        ))
                        : null
                }
            <LinkHeader onClick={() => { setBurger(false) }} name={"Litepaper"} anchor={"Litepaper"} href={"/litepaper"} key={5} />
            </div>
            {dataFooter?.precisionButton && dataFooter?.precisionButton?.[0] ?
                <>
                    {dataFooter?.precisionButton?.[0]?.subtitle ? <p className='subtitle'>{dataFooter?.precisionButton?.[0]?.subtitle}</p> : null}
                    {dataFooter?.precisionButton?.[0]?.button && dataFooter?.precisionButton?.[0]?.button?.[0] ?
                        dataFooter?.precisionButton?.[0]?.button?.map((_: any, i: number) => (
                            <Button onclick={() => { setBurger(false) }} burger={true} key={i + 99} header={true} href={_.href} anchor={_.anchor} color={_.style} name={_.name} />
                        ))
                        : null
                    }
                </>
                : null}
            <WrapperNetwork>
                {
                    dataNetwork?.network && dataNetwork?.network?.length ?
                    dataNetwork?.network?.map((_: any, i: number) => (
                            <NetworkIcons key={i + 343} name={_.icon} href={_.href} />
                        ))
                        : null
                }
            </WrapperNetwork>
        </Container>
    )
}