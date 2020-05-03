import React from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './styles';

export default function Rating({
  count,
  onReview,
  disabled,
}) {
  return (
    <View style={styles.ratingContainer}>
      <StarRating
        disabled={disabled}
        maxStars={5}
        rating={count}
        fullStarColor="#3858C1"
        starSize={16}
        selectedStar={(rating) => onReview(rating)}
      />
    </View>
  )
}
