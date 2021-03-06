import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export default function TextField({
  placeholder,
  multiline,
  numberOfLines,
  onChange,
  value,
  height,
}) {
  return (
    <View style={[styles.textAreaContainer, { height }]}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={(text) => onChange(text)}
        value={value}
        style={styles.textarea}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  )
}
