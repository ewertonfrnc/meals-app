import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screens/categories.screen';
import MealDetail from './screens/meal-detail.screen';
import MealsOverview from './screens/meals-overview.screen';

import { RootStackParamList } from './interfaces/navigation.interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories'>
          <Stack.Screen
            name='Categories'
            component={Categories}
            options={{ title: 'Categorias' }}
          />
          <Stack.Screen
            name='Details'
            component={MealsOverview}
            options={{ title: 'Opções' }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetail}
            options={{ title: 'Detalhes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
