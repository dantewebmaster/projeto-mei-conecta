import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Rating from '../Rating';

export default function MessageCard({
  name,
  category,
  profileUrl,
  rating,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.messageCard}>
        <Image
          style={styles.messageAvatar}
          source={{ uri: profileUrl }}
        />
        <View style={styles.messageInfos}>
          <Text style={styles.messageName}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
          <Rating count={rating} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
