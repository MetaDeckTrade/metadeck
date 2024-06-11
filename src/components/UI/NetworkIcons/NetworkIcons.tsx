import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";
import { rm } from "@/styles/utils";
import { colors } from "@/styles";
const StyleLineAnimation = styled(Link)`
    position: relative;
    width: ${rm(32)};
    height: ${rm(32)};
    cursor: pointer;
    
    >svg{
        transition: color ease 0.5s;
        color: ${colors.white1};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    &:hover {
        >svg{
            color: ${colors.yellow1};
        }
    }
    `
export default function NetworkIcons({ name,  className , href}: { name: string , className ?: any, href: string}) {

    

    const icon = useMemo(() => {
        if (!name) { return }
        switch (name) {
            case 'telegram':
                return (
                    <StyleLineAnimation href={href || '/'} target="_blank" >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 32H12L0 20V0H32V32Z" fill="currentColor" />
                            <path d="M8.23209 14.878C13.859 12.2761 21.1402 9.10391 22.1457 8.66476C24.782 7.51571 25.5911 7.7357 25.1878 10.2809C24.898 12.1102 24.0624 18.1661 23.3958 21.9356C23.0006 24.1711 22.1135 24.436 20.7192 23.4688C20.0486 23.0034 16.6636 20.6503 15.9287 20.0978C15.2581 19.5944 14.3332 18.9885 15.4932 17.7955C15.9061 17.3707 18.6117 14.6546 20.72 12.5409C20.9961 12.2634 20.6492 11.8073 20.3304 12.0299C17.4888 14.0107 13.5491 16.7598 13.0476 17.1177C12.2901 17.6584 11.5624 17.9063 10.2567 17.512C9.26973 17.2142 8.30615 16.8588 7.93102 16.7234C6.48605 16.2022 6.82898 15.527 8.23209 14.878Z" fill="black" />
                        </svg>
                    </StyleLineAnimation>
                )
            case 'youtube':
                return (
                    <StyleLineAnimation  href={href || '/'} target="_blank">
                        <svg width="31" height="32" viewBox="0 0 31 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H31V12V32H0V0Z" fill="currentColor" />
                            <g clipPath="url(#clip0_148_3)">
                                <g clipPath="url(#clip1_148_3)">
                                    <path d="M23.6446 11.8739C23.4487 11.1359 22.8735 10.556 22.1416 10.3584C20.8164 10 15.5 10 15.5 10C15.5 10 10.1837 10 8.85841 10.3584C8.12653 10.556 7.55137 11.1359 7.35545 11.8739C7 13.2103 7 16 7 16C7 16 7 18.7898 7.35545 20.1261C7.55137 20.8641 8.12653 21.444 8.85841 21.6416C10.1837 22 15.5 22 15.5 22C15.5 22 20.8164 22 22.1416 21.6416C22.8735 21.444 23.4487 20.8641 23.6446 20.1261C24.0001 18.7898 24.0001 16 24.0001 16C24.0001 16 23.9986 13.2103 23.6446 11.8739Z" fill="black" />
                                    <path d="M13.7983 18.5712L18.2149 16.0002L13.7983 13.4292V18.5712Z" fill="currentColor" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_148_3">
                                    <rect width="17" height="12" fill="currentColor" transform="translate(7 10)" />
                                </clipPath>
                                <clipPath id="clip1_148_3">
                                    <rect width="17" height="12" fill="currentColor" transform="translate(7 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </StyleLineAnimation>
                )
            case 'twitter':
                return (
                    <StyleLineAnimation href={href || '/'} target="_blank"  >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H20L32 12V32H0V0Z" fill="currentColor" />
                            <g clipPath="url(#clip0_148_4)">
                                <path d="M20.5867 9H23.0401L17.6534 14.941L23.9467 23H19.0081L15.1414 18.1026L10.7147 23H8.26141L13.9681 16.6458L7.94141 9H13.0027L16.4961 13.4738L20.5867 9ZM19.7281 21.6052H21.0881L12.2881 10.3432H10.8267L19.7281 21.6052Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_148_4">
                                    <rect width="16" height="14" fill="currentColor" transform="translate(8 9)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </StyleLineAnimation>
                )
            default:
                return null;
        }
    }, [name])

    return icon

}