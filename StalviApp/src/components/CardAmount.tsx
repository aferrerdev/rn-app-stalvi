import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

interface CardAmountProps {
  title: string;
  subtitle?: string;
  amount: number;
}

const CardAmount = (props: CardAmountProps) => {
  return (
    <Card
      containerStyle={styles.containerStyle}
      wrapperStyle={styles.wrapperStyle}>
      <Card.FeaturedTitle style={styles.featuredTitle}>
        {props.title}
      </Card.FeaturedTitle>
      {/* Display subtitle only if is defined as a prop */}
      {props.subtitle ? (
        <Card.FeaturedSubtitle style={styles.featuredSubTitle}>
          {props.subtitle}
        </Card.FeaturedSubtitle>
      ) : null}
      <Card.Title style={styles.amountTitle} h4>
        {props.amount}
      </Card.Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    alignContent: 'center',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
  },
  featuredTitle: {
    color: 'grey',
  },
  featuredSubTitle: {
    color: 'grey',
  },
  amountTitle: {
    marginLeft: 0,
    textAlign: 'left',
  },
});

export default CardAmount;
