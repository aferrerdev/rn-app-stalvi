import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

interface ChartCardProps {
  children: JSX.Element;
}

interface ChartCardProps {
  title: string;
  subtitle?: string;
}

const ChartCard = (props: ChartCardProps) => {
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
      <Card.Divider />
      {props.children}
    </Card>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    alignContent: 'flex-start',
    padding: 0,
    margin: 0,
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  featuredTitle: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  },
  featuredSubTitle: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default ChartCard;
