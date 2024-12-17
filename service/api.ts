import axios from "axios";
import { LoginType, goalsType, addGoals, editGoal, taskGraph, addTask, taskDetails } from "@/types/types"


const axiosInstance = axios.create({baseURL: process.env.NEXT_PUBLIC_BaseURL})
// const axiosInstanceAuth = axios.create(
//     {
//         baseURL: process.env.NEXT_PUBLIC_BaseURL,
//         timeout: 10000,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmM3MmQ4YTQzN2E4MTE1MDA2NTE1MyIsImlhdCI6MTczMjM5NDYzMSwiZXhwIjoxNzMyNDgxMDMxfQ.cqkN31v9B-ZWwLcRpsDBFovjawPFBnrMA5jtAOFgpBE`,
//         //   'Authorization': `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
// )

const axiosInstanceAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BaseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstanceAuth.interceptors.request.use(
    (config) => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  

export const userLogin = async (data: LoginType) => {
    return(
        await axiosInstance.post("/auth/login", data)
    )
}

export const allGoals = async () => {
    return(
        await axiosInstanceAuth.get<goalsType[], any>("/growth/all-growth")
    )
}

export const allTask = async () => {
    return(
        await axiosInstanceAuth.get<addTask[], any>("/task")
    )
}


export const addGoal = async (data: addGoals) => {
    return(
        await axiosInstanceAuth.post("/growth/create", data)
    )
}

export const addTasks = async (data: addTask) => {
    return(
        await axiosInstanceAuth.post("/task/addTask", data)
    )
}

export const editGoalAxios = async (data: editGoal, id:string) => {
    return(
        await axiosInstanceAuth.patch(`/growth/edit-growth/${id}`, data)
    )
}

export const editTaskAxios = async (data: taskDetails, id:string) => {
    return(
        await axiosInstanceAuth.patch(`/task/editTask/${id}`, data)
    )
}

export const deleteGoal = async (id:string) => {
    return(
        await axiosInstanceAuth.delete(`/growth/delete/${id}`)
    )
}

export const deleteTask = async (id:string) => {
    return(
        await axiosInstanceAuth.delete(`/task/deleteTask/${id}`)
    )
}

export const taskGraphs = async () => {
    return(
        await axiosInstanceAuth.get<taskGraph[]>("/graph/all-task-status")
    )
}

export const allGrowthGraphs = async () => {
    return(
        await axiosInstanceAuth.get<taskGraph[]>("/graph/all-growth-status")
    )
}