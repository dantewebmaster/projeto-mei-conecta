import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Loader from '../Loader';

export default function CategoriesList({
  categories,
  loading,
}) {
  return loading ? (
    <Loader />
  ) : (
    <View style={styles.categoriesList}>
      {categories?.map((category) => (
        <View key={category.name} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
        </View>
      ))}
    </View>
  )
}
