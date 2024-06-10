
export async function fetchData(panh: string | any) {
    const version = process.env.NEXT_PUBLIC_STORYBLOK_DATA_VERSION;
    const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN
    const url = `https://api.storyblok.com/v2/cdn/stories/${panh}?version=${version}&token=${token}`;
    return await fetch(url, { next: { revalidate: 10 } }).then( async (res)  =>  {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const storyData = await res.json()
        if(!storyData?.story?.content){
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
         return storyData.story.content.body
         
    })
   
}

// get the desired element in the array
export function getStoryblokSectionData(data: any, sectionName: string) {
    return data?.page?.find((section: any) => section.component === sectionName);
}
export function getStoryblokSectionDataW(data: any, sectionName: string) {
    if (!data.length || !sectionName) { return }
    return data?.find((section: any) => section.component === sectionName);
}

