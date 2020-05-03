import React from 'react';
import { TouchableOpacity } from 'react-native';
import EditIcon from '../../assets/icon_edit.svg';

export default function ButtonEdit({
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <EditIcon width={24} height={24} />
    </TouchableOpacity>
  )
}
