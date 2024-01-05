import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Categories from './screens/categories.screen';

export default function App() {
  return (
    <>
      <StatusBar style='inverted' />

      <Categories />
    </>
  );
}

const styles = StyleSheet.create({});
