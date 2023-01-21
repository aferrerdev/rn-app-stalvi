import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './SavingsList.theme';
import {ListItem} from 'react-native-elements';
import {ISavings} from '../../interfaces/interfaces';

interface SavingsListProps {
  savings: Array<ISavings>;
}

const SavingsList = (props: SavingsListProps) => {
  const renderItem = (item: ISavings, index: number) => (
    <ListItem key={item.name + index} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.listView}>
      {props.savings.map((saving: ISavings, index: number) =>
        renderItem(saving, index),
      )}
    </SafeAreaView>
  );
};

export default SavingsList;
