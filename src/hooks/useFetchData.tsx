import { fetchData } from "@/api/useStoryblok";
import { useEffect } from "react";

export default function useFetchData(url: string, setState: any) {
    
    useEffect(() => {
        if (!setState) { return }
        const fetch = async () => {
            await fetchData(url)
            .then((_) => {
                console.log(_)

                if (setState ) {
                    setState(_)
                    localStorage.setItem('data', `${_}`)
                }
            })
            .catch((error : any) => {
                console.log(error)
                const dataCache = localStorage.getItem('data')
                if (dataCache) {
                    setState(dataCache)
                }
            })
        }
        fetch()
    }, [url, setState])

    return null;
}