import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type MealProps = {
  [key: string]: string;
};

const Meal: FC<MealProps> = ({ ...mealProps }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable style={({ pressed }) => pressed && styles.buttonPressed}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: mealProps.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{mealProps.title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem}>{mealProps.duration}m</Text>
            <Text style={styles.detailItem}>
              {mealProps.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {mealProps.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  mealItem: {
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
