import React from 'react';
// import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import * as MailComposer from 'expo-mail-composer';
// import formatMoney from '../../utils/formatMoney';

// import Logo from '../../assets/logo.png';
import styles from './styles';

const Detail = () => {
  // const navigation = useNavigation();
  // const route = useRoute();

  // // const incident = route.params.incident;
  // const message = 'Corpo da mensagem...';

  // function navigateBack() {
  //   navigation.goBack();
  // }

  // function sendMail() {
  //   MailComposer.composeAsync({
  //     subject: 'Herói do caso: Dalila quer sachê!',
  //     recipients: [incident.email],
  //     body: message,
  //   })
  // }

  // function sendWhatsapp() {
  //   Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  // }

  return (
    <View style={styles.container}>
      <Text>Detalhes...</Text>
    </View>
  )
}

export default Detail
