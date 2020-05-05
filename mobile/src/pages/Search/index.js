import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, RefreshControl } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { getAllCategory } from '../../services/categoryApi';
import styles from './styles'

import CategoriesList from '../../components/CategoriesList';

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCategoriesList() {
    try {
      setLoading(true);
      const response = await getAllCategory();

      setCategories([ ...response ]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]} // component with index [1] is sticky
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={getCategoriesList}
        />
      }
    >
      <View style={styles.searchFieldContainer}>
        <View style={styles.searchField}>
          <Feather name="search" size={24} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Digite uma busca..."
          />
        </View>
      </View>
      <CategoriesList
        categories={categories}
        loading={loading}
      />
    </ScrollView>
  )
}
