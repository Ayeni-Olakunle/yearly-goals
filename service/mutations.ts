import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginType, addGoals } from "@/types/types";
import { userLogin, allGoals, addGoal } from "./api";
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
        queryFn: allGoals
    })
};

export function addGoalMut() {
    return useMutation({
        mutationFn: (data: addGoals) => addGoal(data),
        onMutate: () => {
            console.log("Mutate");
            toast.loading("Please wait...")
        },

        onError: () => {
            console.log("Error");
            toast.error("Email or Password is not correct");
        },

        onSuccess: (data) => {
            console.log("Success", data);
            toast.success("Successfully Login");
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};