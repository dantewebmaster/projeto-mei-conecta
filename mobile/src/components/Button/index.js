import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({
  buttonLabel,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{buttonLabel}</Text>
    </TouchableOpacity>
  )
}
