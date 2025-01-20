import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast"
import {io} from "socket.io-client"

const BASE_URL = import.meta.env.MODE === "development" ?"http://localhost:5002" : "/"

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigninUp: false,
    isLogginIn: false,
    isUpdatingProfile: false,
    onlineUsers: [],
    socket: null,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")

            set({ authUser: res.data })
            get().connectSocket()
        } catch (error) {
            set({ authUser: null });
            console.log("error in checkAuth", error)
        } finally {
            set({isCheckingAuth: false})
        }
    },
    signup: async (data) => {
       set ({isSigninUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup", data) 
            set({ authUser: res.data})
            toast.success("Account created successfully")
            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isSigninUp: false})
        }
    },
    login: async (data) => {
        set({ isLogginIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({ authUser: res.data });
            toast.success("Logged out successfully")

            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isLogginIn: false})
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout")
            set({ authUser: null })
            toast.success("Logged out successfully")
            get().disconnectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put('/auth/update-profile', data)
            set({ authUser: res.data })
            toast.success("Profile Updated Successfully")
        } catch (error) {
            console.log("Error in updating profile")
            toast.error(error.response.data.message)
            
        } finally {
            set({isUpdatingProfile: false})
        }
    },

    connectSocket: () => {
        const { authUser } = get()
        if (!authUser || get().socket?.connected) return;
        
        const socket = io(BASE_URL, {
            query: {
                userId: authUser._id
            }
        })
        socket.connect()

        set({ socket: socket })
        
        socket.on("getOnlineUsers",(userIds) => {
            set({onlineUsers: userIds})
        })
    },
    disconnectSocket: () => {
        if(get().socket?.connect) get().socket.disconnect()
    }
}))