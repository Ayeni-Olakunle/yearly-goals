import { useQuery } from "@tanstack/react-query";
import { taskGraphs, allGrowthGraphs, allTask } from "./api";

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