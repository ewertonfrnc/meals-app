import React, { FC } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation.interface';
import MealDetails from '../components/meal-details.component';

type MealDetailProps = {} & NativeStackScreenProps<
  RootStackParamList,
  'MealDetail'
>;

const MealDetail: FC<MealDetailProps> = ({ route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>

      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />

      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 34,
    color: '#333',
  },
});
