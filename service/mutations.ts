import { useMutation } from "@tanstack/react-query";
import { LoginType } from "@/types/auth";
import { userLogin } from "./api";
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
            toast.success("Successfully Login");
            route.push("/user")
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
} 