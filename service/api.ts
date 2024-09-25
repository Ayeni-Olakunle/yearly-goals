import axios from "axios";
import { LoginType, goalsType, addGoals, editGoal } from "@/types/types"

const axiosInstance = axios.create({baseURL: process.env.NEXT_PUBLIC_BaseURL})
const axiosInstanceAuth = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_BaseURL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmM3MmQ4YTQzN2E4MTE1MDA2NTE1MyIsImlhdCI6MTcyNzExMDgwOCwiZXhwIjoxNzI3MTk3MjA4fQ.A9lzLjCaFiYaEHxVzh5eKQO6x6hbQ0nF9YZi08Q7ad0`,
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

export const editGoalAxios = async (data: editGoal) => {
    return(
        await axiosInstanceAuth.put(`/growth/edit-growth/${data.id}`, data)
    )
}