import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="small" color="#3858C1" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  )
}
