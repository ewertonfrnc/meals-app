import React, { FC } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation.interface';

import { CATEGORIES } from '../data/dummy-data';
import * as CategoryType from '../models/category';

import Category from '../components/category.component';

type CategoriesProps = {} & NativeStackScreenProps<
  RootStackParamList,
  'Categories'
>;

const Categories: FC<CategoriesProps> = ({ navigation }) => {
  function renderCategory(item: CategoryType.default) {
    const pressHandler = () => {
      navigation.navigate('Details', {
        categoryId: item.id,
      });
    };

    return (
      <Category title={item.title} color={item.color} onPress={pressHandler} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategory(item)}
      numColumns={2}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
