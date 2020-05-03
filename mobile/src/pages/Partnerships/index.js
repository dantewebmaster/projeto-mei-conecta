import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import * as MailComposer from 'expo-mail-composer';
// import formatMoney from '../../utils/formatMoney';

import styles from './styles';
import Header from '../../components/Header';

const Detail = () => {

  const navigation = useNavigation();
  // const route = useRoute();

  // // const incident = route.params.incident;
  // const message = 'Corpo da mensagem...';

  function navigateBack() {
    navigation.goBack();
  }

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
      <Header
        title="Minhas parcerias"
        // onBack={navigateBack}
      />
      <Text>Minhas Parcerias...</Text>
    </View>
  )
}

export default Detail
