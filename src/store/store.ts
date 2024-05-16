import { createWithEqualityFn } from "zustand/traditional";
interface useGlobalStore {
    burger: boolean
    setburger: (value: boolean) => void
}

const useGlobalStore = createWithEqualityFn<useGlobalStore>(
    (set, get) => ({ 

        burger: false,
        setburger: (value) => set({ burger: value }),

    })
)
export default useGlobalStore