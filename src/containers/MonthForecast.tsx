import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import ChartCard from '../components/ChartCard';
import {Dimensions} from 'react-native';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';
import {BalanceState} from '../redux/state';

interface MonthBalanceForecastProps {
  balance: BalanceState;
}

const MonthBalanceForecast = (props: MonthBalanceForecastProps) => {
  const data = [
    {
      name: 'Expenses',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Income',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

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
    <ChartCard title="Income vs Expenses" subtitle="This month">
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 35}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        fromZero
        avoidFalseZero
        paddingLeft={'15'}
        center={[0, 0]}
        hasLegend={true}
      />
    </ChartCard>
  );
};

export default MonthBalanceForecast;
