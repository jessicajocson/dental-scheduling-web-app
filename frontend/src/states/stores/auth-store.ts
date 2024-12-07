import {create} from "zustand";

interface IAuthStore {
    isAuthenticated: boolean;
    setIsAuthenticated: (status:boolean) => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated') || 'false'),
    setIsAuthenticated: (isAuth: boolean) => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuth));
        set({isAuthenticated: isAuth});
    }
}))

export default useAuthStore;