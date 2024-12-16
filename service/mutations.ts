import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoginType, addGoals, editGoal } from "@/types/types";
import { userLogin, allGoals, addGoal, editGoalAxios, deleteGoal  } from "./api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function useLogin() {
    const route = useRouter();
    return useMutation({
        mutationFn: (data: LoginType) => userLogin(data),
        onMutate: () => {
            console.log("Mutate");
        },

        onError: () => {
            console.log("Error");
            toast.error("Email or Password is not correct");
        },

        onSuccess: (data) => {
            console.log("Success", data);
            localStorage.setItem("token", data.data.toke)
            localStorage.setItem("firstName", data.data.firstName)
            localStorage.setItem("lastName", data.data.lastName)
            toast.success("Successfully Login");
            route.push("/user")
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};

export function allGoal() {
    return useQuery({
        queryKey: ["all-goals"],
        queryFn: allGoals,
    })
};

export function addGoalMut(reset: () => void) {
    return useMutation({
        mutationFn: (data: addGoals) => addGoal(data),
        onMutate: () => {
            console.log("Mutate");
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSuccess: () => {
            toast.success("Goal Created Successfully");
            reset();
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};

export function deleteGoalMut(id:string) {
    // const useQueryClient = useQueryClient();
    return useMutation({
        mutationFn: () => deleteGoal(id),
        onMutate: () => {
            console.log("Mutate");
        },

        onSuccess: () => {
            toast.success("Goal deleted successfully");
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};

export function editGoalMut(id:string) {
    // const useQueryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: editGoal) => editGoalAxios(data, id),
        onMutate: () => {
            console.log("Mutate");
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSuccess: () => {
            toast.success("Goals updated successfully");
            allGoal();
        },

        onSettled: () => {
            console.log("Settled")
            
        }
    })
};