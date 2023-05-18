import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

interface ChartProps {
	options: ChartOptions<'bar'>;
	data: ChartData<'bar'>;
}
export const Chart: React.FC<ChartProps> = ({ options, data }) => {
	return (
		<Bar
			data={data}
			width={50}
			height={100}
			options={options}
		/>
	);
};
