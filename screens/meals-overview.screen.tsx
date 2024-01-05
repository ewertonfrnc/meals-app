import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation.interface';

import * as MealsType from '../models/meal';
import { MEALS } from '../data/dummy-data';

import Meal from '../components/meal.component';

type MealsOverviewProps = {} & NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

const MealsOverview: FC<MealsOverviewProps> = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (mealItem: MealsType.default) => {
    return <Meal {...mealItem} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3'
  },
});
