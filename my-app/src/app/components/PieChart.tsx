// src/app/components/PieChart.tsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components if not already registered in page.tsx
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: { [key: string]: number };
}

const PieChart = ({ data }: PieChartProps) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Pie Chart',
        data: Object.values(data),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      }
    ]
  };

  return <Pie data={chartData} />;
};

export default PieChart;
