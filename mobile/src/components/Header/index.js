import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Header({
  title,
  onBack,
}) {
  const route = useRoute();
  const navigation = useNavigation();

  function handleBack() {
    return navigation.goBack()
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack ? onBack : handleBack}>
        <Feather name="arrow-left" size={32} color="#3858C1" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title || route.name}</Text>
    </View>
  )
}
