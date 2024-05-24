import { createWithEqualityFn } from "zustand/traditional";
interface useGlobalStore {
    burger: boolean,
    inViewBlanket: boolean,
    inViewButtonBlanket: boolean,
    inViewFooterBlanket: boolean,
    setInViewBlanket: (value: boolean) => void,
    setinViewButtonBlanket: (value: boolean) => void,
    setinViewFooterBlanket: (value: boolean) => void,
    setburger: (value: boolean) => void
}

const useGlobalStore = createWithEqualityFn<useGlobalStore>(
    (set, get) => ({ 

        burger: false,
        setburger: (value) => set({ burger: value }),

        inViewBlanket: true,
        setInViewBlanket: (value: boolean) => set({ inViewBlanket: value }),

        inViewButtonBlanket: true,
        setinViewButtonBlanket: (value: boolean) => set({ inViewButtonBlanket: value }),

        inViewFooterBlanket: true,
        setinViewFooterBlanket: (value: boolean) => set({ inViewFooterBlanket: value }),
        
    })
)
export default useGlobalStore