import React from 'react';
import { View, Text, Image } from 'react-native';


import StarIcon from '../../assets/star.png';
import StarGrayIcon from '../../assets/star_gray.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
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
    </TouchableOpacity>
  )
}
