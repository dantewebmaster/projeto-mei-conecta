import React from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Modal({
  visible,
  onClose,
  children,
}) {
  return (
    <ReactNativeModal
      isVisible={visible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationOutTiming={900}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      style={styles.modalContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? undefined : 'position'}
        enabled
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.buttonCloseModal}
            onPress={onClose}
          >
            <Feather name="x" size={32}></Feather>
          </TouchableOpacity>
          {children}
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  )
}
