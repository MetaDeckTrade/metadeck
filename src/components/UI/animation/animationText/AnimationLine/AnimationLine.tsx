
import { SplitText } from "@cyriacbr/react-split-text"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"
import styled, { css } from 'styled-components'
import { colors, fonts } from '@/styles'
import { responsive, rm } from '@/styles/utils'
const StyledContainer = styled(SplitText)`
    color: ${colors.white2};
    font-size: ${rm(24)};
    line-height: 130%;
    letter-spacing: 0.01em;
    opacity: 0.6;
    ${(props : any) => props.tradingCompanion &&
        css`
            position: relative;
            width: ${rm(585)} !important;
            overflow: hidden;
            ${fonts.inter}
            ${responsive.lg`
                width: ${rm(445)} !important;
            `}
            ${responsive.md`
                width: ${rm(474)} !important;
                margin-top: ${rm(20)};
            `}
            ${responsive.xsm`
                width: 100% !important;
                margin-top: ${rm(0)};
            `}
                `
    }
    
    ${(props : any) => props.whyMetaDeck &&
        css`
            position: relative;
            width: ${rm(613)} !important;
            overflow: hidden;
            line-height: 120% !important;
            font-size: ${rm(32)} !important;
            opacity: 0.75 !important;
            text-transform: uppercase;
            letter-spacing: 0.1em !important;

            ${responsive.lg`
                width: ${rm(460)} !important;
                font-size: ${rm(30)} !important;
            `}
            ${responsive.md`
                width: ${rm(613)} !important;
            `}
           ${responsive.xsm`
                width: ${rm(314)} !important;
                font-size: ${rm(20)} !important;
            `}
        `
    }

    ${responsive.lg`
        font-size: ${rm(20)};
    `}
    ${responsive.xsm`
         font-size: ${rm(18)};
    `}

    > div {
        overflow: hidden;
    }

    > div > div {
        transform: translate(0, ${rm(160)});
        opacity: 0;
        transition: .75s transform ease 0.5s, 1s opacity ease 0.5s;
    }
    
    ${(props : any) => props.loaded && props.animatedOnce &&
            css`
                > div > div {
                    transform: translate(0, 0) !important;
                    opacity: 1 !important;
                }
                ${Array.from({ length: 20 }, (_, i) => `
    > :nth-child(${i + 1}) > div {
        transition-delay: ${0.25 * (i + 1)}s;
    };
`).join('\n')}
                }
            `
    }
    
    >span{
        display: inline !important;
    } 
    `
const LineAnimation = ({ delay = 0, children, ...props }: any) => {
    const { ref, inView } = useInView()

    const [loaded, setLoaded] = useState(false);
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!inView) { return }
        if (inView) {
            setAnimatedOnce(true)
        }
    }, [inView])

    return (
        <StyledContainer
            ref={ref}
            LineWrapper={lineText}
            loaded={loaded}
            animatedOnce={animatedOnce}
            {...props}
        >
            {children}
        </StyledContainer>

    )
}

function lineText({ children }: any) {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}


export default LineAnimation