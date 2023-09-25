import React from 'react';
import {Text} from 'react-native';

const HelloProps = (props) => {
  return <Text>Hello, I am {props.name}!</Text>;
};

export default HelloProps;