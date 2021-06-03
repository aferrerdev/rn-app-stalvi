import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

interface CardAmountProps {
  title: string;
  subtitle?: string;
  amount: number;
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  featuredTitle: {
    color: 'grey',
  },
  featuredSubTitle: {
    color: 'grey',
  },
});

const CardAmount = (props: CardAmountProps) => {
  return (
    <Card containerStyle={styles.cardStyle}>
      <Card.FeaturedTitle style={styles.featuredTitle}>
        {props.title}
      </Card.FeaturedTitle>
      {/* Display subtitle only if is defined as a prop */}
      {props.subtitle ? (
        <Card.FeaturedSubtitle style={styles.featuredSubTitle}>
          {props.subtitle}
        </Card.FeaturedSubtitle>
      ) : null}
      <Text>{props.amount}</Text>
    </Card>
  );
};

export default CardAmount;
