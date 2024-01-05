import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import * as CategoryType from '../models/category';

import Category from '../components/category.component';

function renderCategory(item: CategoryType.default) {
  return <Category title={item.title} color={item.color} />;
}

const Categories = () => {
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
