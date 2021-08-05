import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
});

interface AddTransactionPageProps {
  route: any;
}

const AddTransactionPage = (props: AddTransactionPageProps) => {
  console.log(props.route.params);

  const dispatch = useDispatch();

  const handleConfirmButton = () => {
    dispatch({action: '@BALANCE/ADD_INCOME', payload: {}});
  };

  return (
    <View style={styles.page}>
      <Text>Add</Text>
      <Button onPress={handleConfirmButton}>
        <Text>Add</Text>
      </Button>
    </View>
  );
};

export default AddTransactionPage;
