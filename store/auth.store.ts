import { create, StoreApi, UseBoundStore } from "zustand"
import { User } from "@/type"
import * as Sentry from "@sentry/react-native"
import { getCurrentUser } from "@/lib/appwrite"
type AuthState = {
    isAuthenticated: boolean
    user: User | null
    isLoading: boolean

    setIsAuthenticated: (value: boolean) => void
    setUser: (user: User | null) => void
    setIsLoading: (loading: boolean) => void

    fetchAuthenticatedUser: () => Promise<void>
}

const useAuthStore: UseBoundStore<StoreApi<AuthState>> = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    isLoading: true,

    setIsAuthenticated: (value) => set({isAuthenticated: value}),
    
    setUser: (user) => set({user}),
    
    setIsLoading: (isLoading) => set({isLoading}),

    fetchAuthenticatedUser: async () => {
        set({isLoading: true})
        try {
            const user = await getCurrentUser()
            
            if(user)
                set({isAuthenticated: true, user: user as unknown as User})
            else
                set({isAuthenticated: false, user: null})
        } catch (error) {
            console.log("-> fetch authenticated user error", error as String)
            Sentry.captureException(error)
            set({isAuthenticated: false, user: null})
        } finally {
            set({isLoading: false})
        }
    }
}))

export default useAuthStore