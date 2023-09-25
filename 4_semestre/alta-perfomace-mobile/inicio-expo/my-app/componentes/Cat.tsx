import React from 'react';
import {Text} from 'react-native';

type CatProps = {
  name: String,
}

const Cat = (props: CatProps) => {
  const name = 'Maru';
  return <Text>Hello, I am {props.name}!!</Text>;
};

export default Cat;