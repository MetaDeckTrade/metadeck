import { colors } from "./colors"
import { fonts, orbitron } from "./fonts"
import { media, responsive, rm } from "./utils"

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
background-color: ${colors.blue2};
color: ${colors.white1};
font-size: 16px;
${orbitron()}
overflow: hidden;
}

html, body {
-webkit-overflow-scrolling: touch;
position: relative;
overscroll-behavior-y: none;
// height: calc(var(--vh, 1vh) * 100);
@media screen and (max-width: 1080px) {
    // height: calc(var(--svh, 1vh) * 100);
}
}
body::-webkit-scrollbar { width: 0; }

#__next {
height: 100%;
}

html.lenis {
height: auto;
}

body {
    animation: 2s fadeIn ease;
}
@Keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


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

    
.mySwiperTheyTrustUs {
    height: fit-content !important;
    margin-top: ${rm(100)};
        @media screen and (max-width: 1440px) {
           margin-top: ${rm(200)};
        }
        @media screen and (max-width: 1024px) {
           margin-top: ${rm(120)};
        }
        @media screen and (max-width: 576px) {
            margin-top: ${rm(32)};
        }

    .swiper-wrapper {
        height: auto !important;
        transition-timing-function: linear !important;
        will-change: transform;
    }

    .swiper-slide {
        height: auto !important;
        margin-right: ${rm(80)} !important;
        width: ${rm(380)} !important;
       
       @media screen and (max-width: 1440px) {
           width: ${rm(290)};
        }
        @media screen and (max-width: 1024px) {
           width: ${rm(332.5)} !important;
        }
        @media screen and (max-width: 576px) {
            width: auto !important;
            margin-right: ${rm(20)} !important;
        }
    }
}

.swiper {
    width: 100%;
    height: 100%;
    display: flex !important;
    position: static !important;
}

`