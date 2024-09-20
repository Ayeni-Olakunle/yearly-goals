import axios from "axios";
import { LoginType } from "@/types/auth"

const axiosInstance = axios.create({baseURL: process.env.NEXT_PUBLIC_BaseURL})

export const userLogin = async (data: LoginType) => {
    return(
        await axiosInstance.post("/auth/login", data)
    )
}