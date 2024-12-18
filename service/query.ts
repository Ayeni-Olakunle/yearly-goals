import { useQuery } from "@tanstack/react-query";
import { taskGraphs, allGrowthGraphs, allTask, allBookMark } from "./api";

export function allTaskGraph() {
    return useQuery({
        queryKey: ["Task Graphs"],
        queryFn: taskGraphs,

    })
};

export function allGrowthGraphsFn() {
    return useQuery({
        queryKey: ["All Growth Graphs"],
        queryFn: allGrowthGraphs,
    })
};

export function allTaskFn() {
    return useQuery({
        queryKey: ["all-tasks"],
        queryFn: allTask,
    })
};

export function allBookMarkFn() {
    return useQuery({
        queryKey: ["all-bookmark"],
        queryFn: allBookMark,
    })
};