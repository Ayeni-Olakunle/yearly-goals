import { useQuery } from "@tanstack/react-query";
import { taskGraphs, allGrowthGraphs } from "./api";

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