"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

interface ChartType {
  getContext: any;
  chart: any;
}

interface dataItem {
  weight: string;
}

export default function TaskChart() {
  const chartRef = useRef<ChartType | null>(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://dummyjson.com/users");
      if (response.status != 200) {
        console.error("Bad response");
      }
      const data = response.data;
      const firstSix = data.users.splice(0, 5);
      setChartData(firstSix);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = ["Completed", "In Progress", "Pending", "Close Tasks"];
      const data = chartData.map((items: dataItem) => items.weight);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              barPercentage: 0.9,
              barThickness: 50,
              label: "",
              data: data,
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
              text: "All Task Progress",
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
  }, [chartData]);

  return (
    <section>
      <div className="relative w-full h-[450px]">
        <canvas ref={chartRef as any} className="!h-full !w-full" />
      </div>
    </section>
  );
}
