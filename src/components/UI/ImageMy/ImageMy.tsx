import Image from "next/image";
import { useState } from "react";

interface Types {
    width: number,
    height: number,
    alt: string,
    src: string,
    className?: any
}

export default function ImageMy({width, height, alt='', src, className } : Types){
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };
    return(
        <Image className={`${className}`} style={loaded ? {opacity: '1'} : {opacity: '0', transition: 'opacity 1s ease-in-out'}}  width={width} height={height} alt={alt} src={src} onLoad={handleLoad}/>
    )
}