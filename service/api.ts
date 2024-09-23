import axios from "axios";
import { LoginType, goalsType, addGoals } from "@/types/types"

const axiosInstance = axios.create({baseURL: process.env.NEXT_PUBLIC_BaseURL})
const axiosInstanceAuth = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_BaseURL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmM3MmQ4YTQzN2E4MTE1MDA2NTE1MyIsImlhdCI6MTcyNjg1NjM1MywiZXhwIjoxNzI2OTQyNzUzfQ.mywh4ZrXxNch_4-ZPFzC89Otio2gVlHr5po8Ga4PA-4`,
        //   'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      }
)

export const userLogin = async (data: LoginType) => {
    return(
        await axiosInstance.post("/auth/login", data)
    )
}

export const allGoals = async () => {
    return(
        await axiosInstanceAuth.get<goalsType[]>("/growth/all-growth")
    )
}

export const addGoal = async (data: addGoals) => {
    return(
        await axiosInstanceAuth.post("/growth/create", data)
    )
}