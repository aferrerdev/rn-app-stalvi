import React from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import ChartCard from '../components/ChartCard';
import {Dimensions} from 'react-native';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';
import {BalanceState} from '../redux/state';

interface BalanceForecastProps {
  balance: BalanceState;
}

const BalanceForecast = (props: BalanceForecastProps) => {
  const data = {
    labels: ['J', 'F', 'M', 'A'],
    legend: ['Ingresos', 'Gastos'],
    data: [
      [60, 40],
      [70, 30],
      [70, 30],
      [20, 80],
    ],
    barColors: ['green', 'red'],
  };

  const chartConfig: ChartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    barPercentage: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      paddingRight: 100,
    },
  };

  return (
    <ChartCard title="Income vs Expenses" subtitle="Next months">
      <StackedBarChart
        data={data}
        width={Dimensions.get('window').width - 35}
        height={256}
        fromZero
        yAxisLabel=""
        hideLegend
        yAxisSuffix=""
        yLabelsOffset={0}
        chartConfig={chartConfig}
      />
    </ChartCard>
  );
};

export default BalanceForecast;
