import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import * as MailComposer from 'expo-mail-composer';
// import formatMoney from '../../utils/formatMoney';

import styles from './styles';
import Header from '../../components/Header';
import DummyAvatar from '../../assets/paulo.png';
import Rating from '../../components/Rating';

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

      <ScrollView style={styles.messagesContainer}>
        <View style={styles.messagesSection}>
          <Text style={styles.heading1}>Enviadas</Text>

          {/* Componentizar (Badge) */}
          <Text style={styles.badge}>99</Text>

          {/* Componentizar (MessageCard) */}
          <View style={styles.messageCard}>
            <Image style={styles.messageAvatar} source={DummyAvatar} />
            <View style={styles.messageInfos}>
              <Text style={styles.messageName}>Elina Naomi</Text>
              <Text style={styles.category}>Designer</Text>
              <Rating count={3} />
            </View>
          </View>
          <View style={styles.messageCard}>
            <Image style={styles.messageAvatar} source={DummyAvatar} />
            <View style={styles.messageInfos}>
              <Text style={styles.messageName}>Elina Naomi</Text>
              <Text style={styles.category}>Designer</Text>
              <Rating count={3} />
            </View>
          </View>
        </View>

        <View style={styles.messagesSection}>
          <Text style={styles.heading1}>Respondidas</Text>
          {/* Componentizar (MessageCard) */}
          <View style={styles.messageCard}>
            <Image style={styles.messageAvatar} source={DummyAvatar} />
            <View style={styles.messageInfos}>
              <Text style={styles.messageName}>Elina Naomi</Text>
              <Text style={styles.category}>Designer</Text>
              <Rating count={3} />
            </View>
          </View>
          <View style={styles.messageCard}>
            <Image style={styles.messageAvatar} source={DummyAvatar} />
            <View style={styles.messageInfos}>
              <Text style={styles.messageName}>Elina Naomi</Text>
              <Text style={styles.category}>Designer</Text>
              <Rating count={3} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail
