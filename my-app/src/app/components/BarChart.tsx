// src/app/components/BarChart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register components if not already registered in page.tsx
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  data: number[];
}

const BarChart = ({ data }: BarChartProps) => {
  const chartData = {
    labels: data.map((_, index) => `Label ${index + 1}`),
    datasets: [
      {
        label: 'Bar Chart',
        data,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default BarChart;
