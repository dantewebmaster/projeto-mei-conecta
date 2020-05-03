import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

// Icons
import StarIcon from '../../assets/star.png';
import StarGrayIcon from '../../assets/star_gray.png';

import styles from './styles';

export default function ProfileCard({
  avatar,
  name,
  category,
  description,
  workImage,
  rating,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.cardInfos}>
            <Image style={styles.cardAvatar} source={{ uri: avatar }} />
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardCategory}>{category}</Text>

            <View style={styles.profileStars}>
              <Image style={styles.star} source={StarIcon} />
              <Image style={styles.star} source={StarIcon} />
              <Image style={styles.star} source={StarIcon} />
              <Image style={styles.star} source={StarIcon} />
              <Image style={styles.star} source={StarGrayIcon} />
            </View>
          </View>
          <Image style={styles.cardWorkImage} source={{ uri: workImage }} />
        </View>
        <View style={styles.cardDivider} />
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
