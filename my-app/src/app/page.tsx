// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

// Import and register necessary components from Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ChartData {
  candlestick: CandlestickData[];
  line_chart: number[];
  bar_chart: number[];
  pie_chart: { [key: string]: number };
}

export default function Home() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/chart-data/');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data: ChartData = await res.json();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Dashboard</h1>
      
      <h2 className={styles.heading2}>Candlestick Chart</h2>
      <ul className={styles.list}>
        {chartData?.candlestick.map((point, index) => (
          <li key={index} className={styles.listItem}>
            {point.time}: Open: {point.open}, High: {point.high}, Low: {point.low}, Close: {point.close}
          </li>
        ))}
      </ul>

      <h2 className={styles.heading2}>Line Chart</h2>
      <LineChart data={chartData?.line_chart || []} />

      <h2 className={styles.heading2}>Bar Chart</h2>
      <BarChart data={chartData?.bar_chart || []} />

      <h2 className={styles.heading2}>Pie Chart</h2>
      <PieChart data={chartData?.pie_chart || {}} />
    </div>
  );
}
