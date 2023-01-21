import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import ChartCard from '../components/ChartCard';
import {Dimensions} from 'react-native';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';
import {BalanceState} from '../redux/state';

interface SavingsForecastProps {
  balance: BalanceState;
}

const SavingsForecast = (props: SavingsForecastProps) => {
  const data = {
    labels: ['J', 'F', 'M', 'A'],
    datasets: [
      {
        data: [40000, 41000, 41500, 42700, 71, 43000],
      },
    ],
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
    <ChartCard title="Savings forecast" subtitle="6 month forecast">
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 35}
        height={256}
        verticalLabelRotation={30}
        fromZero
        formatYLabel={value => {
          const number = parseFloat(value);
          return Math.round(number).toString();
        }}
        chartConfig={chartConfig}
        bezier
      />
    </ChartCard>
  );
};

export default SavingsForecast;
