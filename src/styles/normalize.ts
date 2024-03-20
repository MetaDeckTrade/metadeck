import { colors } from "./colors"
import { fontOnest } from "./fonts"

export const normalize = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        color: inherit;
    }

    img {
        user-select: none;
    }

    span, a {
        display: inline-block;
    }

    button {
        background: none;
    }

    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.primary900};
        color: ${colors.primary50};
        font-size: 16px;
        ${fontOnest(400)}
        overflow: hidden;
    }

    html, body {
        -webkit-overflow-scrolling: touch;
        position: relative;
        overscroll-behavior-y: none;
        height: calc(var(--vh, 1vh) * 100);
        @media screen and (max-width: 1080px) {
            height: calc(var(--svh, 1vh) * 100);
        }
    }
    body::-webkit-scrollbar { width: 0; }

    #__next {
        height: 100%;
    }

    html.lenis {
        height: auto;
    }

    // body {
    //     animation: 3s fadeIn ease;
    // }
    // @keyframes fadeIn {
    //     from {
    //     opacity: 0;
    //     /* filter: blur(30px); */
    //     }
    //     to {
    //     opacity: 1;
    //     /* filter: blur(0); */
    //     }
    // }

    .lenis.lenis-smooth {
        scroll-behavior: auto;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    }
`