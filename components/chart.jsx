"use client"

import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js"
import { useMemo } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

export function BarChart({ data, options }) {
  const chartData = useMemo(() => {
    return data
  }, [data])

  return <Bar options={options} data={chartData} />
}

export function LineChart({ data, options }) {
  const chartData = useMemo(() => {
    return data
  }, [data])

  return <Line options={options} data={chartData} />
}

export function PieChart({ data, options }) {
  const chartData = useMemo(() => {
    return data
  }, [data])

  return <Pie options={options} data={chartData} />
}

