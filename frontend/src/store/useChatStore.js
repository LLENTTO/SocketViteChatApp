import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


    getUsers: async () => {
        set({ isUsersLoading:true });
        try {
            const res = await axiosInstance.get("/messages/user")
            set({ user: res.data })
            console.log(res)
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
        finally {
            set({isUsersLoading: false})
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isMessagesLoading: false})
        }
    },
        
    // Opimize this later
    setSelectedUser: (selectedUser) => set({selectedUser})
}))