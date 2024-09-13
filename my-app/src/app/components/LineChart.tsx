// src/app/components/LineChart.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register components if not already registered in page.tsx
ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

interface LineChartProps {
  data: number[];
}

const LineChart = ({ data }: LineChartProps) => {
  const chartData = {
    labels: data.map((_, index) => `Label ${index + 1}`),
    datasets: [
      {
        label: 'Line Chart',
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  return <Line data={chartData} />;
};

export default LineChart;
