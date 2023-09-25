import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloProps from './HelloProps';
import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text>Hello World!</Text>
      <Hello></Hello>
      <HelloProps name='pedro'></HelloProps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
