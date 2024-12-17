import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoginType, addGoals, editGoal, addTask, taskDetails } from "@/types/types";
import { userLogin, allGoals, addGoal, editGoalAxios, deleteGoal, addTasks, deleteTask , editTaskAxios } from "./api";
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

export function addTasksMut(reset: () => void) {
    return useMutation({
        mutationFn: (data: addTask) => addTasks(data),
        onMutate: () => {
            console.log("Mutate");
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSuccess: () => {
            toast.success("Task Created Successfully");
            reset();
        },

        onSettled: () => {
            console.log("Settled")
        }
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

export function deleteTaskMut(id:string, close: () => void) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => deleteTask(id),
        onMutate: () => {
            console.log("Mutate");
        },

        onSuccess: () => {
            toast.success("Task deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
            close()
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};

export function deleteGoalMut(id:string, close: () => void) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => deleteGoal(id),
        onMutate: () => {
            console.log("Mutate");
        },

        onSuccess: () => {
            toast.success("Goal deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["all-goals"] });
            close()
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSettled: () => {
            console.log("Settled")
        }
    })
};

export function editGoalMut(id:string, close: () => void) {
    const queryClient = useQueryClient();
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
            queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
            close()
        },

        onSettled: () => {
            console.log("Settled")
            
        }
    })
};

export function editTaskMut(id:string, close: () => void) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: taskDetails) => editTaskAxios(data, id),
        onMutate: () => {
            console.log("Mutate");
        },

        onError: () => {
            toast.error("Opps something went wrong");
        },

        onSuccess: () => {
            toast.success("Task updated successfully");
            queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
            close()
        },

        onSettled: () => {
            console.log("Settled")
            
        }
    })
};