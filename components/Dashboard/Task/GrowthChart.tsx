"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { allTaskGraph, allGrowthGraphsFn } from "@/service/query";
import { alltaskGraph, taskGraph } from "@/types/types";

interface ChartType {
  getContext: any;
  chart: any;
}

export default function GrowthChart() {
  const chartRef = useRef<ChartType | null>(null);
  const { data, isLoading, isSuccess } = allGrowthGraphsFn();

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = ["Completed", "In Progress", "Pending", "Close Tasks"];

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: data?.data?.graph.map((items: taskGraph) => items.type),
          datasets: [
            {
              barPercentage: 0.9,
              barThickness: 50,
              label: "",
              data: data?.data?.graph.map((items: taskGraph) => items.total),
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(255, 159, 64, 0.2)",
                "rgb(255, 205, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
              ],
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "All Growth Progress",
            },
          },
          layout: {
            padding: 10,
          },
          // responsive: true
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data]);
  // }, [chartData]);

  return (
    <section>
      <div className="relative w-full h-[450px]">
        <canvas ref={chartRef as any} className="!h-full !w-full" />
      </div>
    </section>
  );
}
