import React from 'react';
import { Text } from 'react-native';
import ScreenModal from 'react-native-modal';
import styles from './styles';
import Button from '../Button';

export default function FullScreenModal({
  visible,
  onButtonPress,
  buttonLabel,
  title,
  description,
  ilustra,
}) {
  return (
    <ScreenModal
      style={styles.fullScreenModalContainer}
      visible={visible}
    >
      <Text style={styles.fullScreenModalTitle}>{title}</Text>
      {ilustra && ilustra}
      <Text style={styles.fullScreenModalDescription}>
        {description}
      </Text>
      <Button
        buttonLabel={buttonLabel}
        onPress={onButtonPress}
      />
    </ScreenModal>
  )
}
