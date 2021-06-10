import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Month} from '../../interfaces/interfaces';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
  listView: {
    flex: 2,
    alignSelf: 'stretch',
  },
  bottomButton: {
    flex: 0,
    height: 100,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const initialMonthCheckbox: any = {};
Object.keys(Month).forEach(
  element => (initialMonthCheckbox[element.toString()] = false),
);

interface SelectMonthsPageProps {
  route: any;
}

const SelectMonthsPage = (props: SelectMonthsPageProps) => {
  const navigator = useNavigation();
  const months: Array<any> = Object.keys(Month);
  const [selectedMonths, setSelectedMonths] =
    useState<any>(initialMonthCheckbox);

  const onMonthPressed = (month: string) => {
    let clonedMonths = {...selectedMonths};
    clonedMonths[month] = !clonedMonths[month];
    setSelectedMonths(clonedMonths);
  };

  const isMonthSelected = (month: string) => {
    return selectedMonths[month];
  };

  const pressContinue = () => {
    navigator.navigate('AddTransaction', {
      type: props.route.params.type,
      subType: props.route.params.subType,
      selectedMonths,
    });
  };

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.listView}
        data={months}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => (
          <ListItem
            topDivider
            key={item + index}
            onPress={() => onMonthPressed(item)}>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
            {isMonthSelected(item) ? (
              <ListItem.Content right>
                <FontAwesome5Icon name="check" />
              </ListItem.Content>
            ) : null}
          </ListItem>
        )}
      />
      <View style={styles.bottomButton}>
        <Button title="Continue" onPress={pressContinue} />
      </View>
    </View>
  );
};

export default SelectMonthsPage;
