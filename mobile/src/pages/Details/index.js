import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// import * as MailComposer from 'expo-mail-composer';
// import formatMoney from '../../utils/formatMoney';

import styles from './styles';
import Header from '../../components/Header';

import DummyAvatar from '../../assets/paulo.png';
import DummyImg from '../../assets/dummy-img.png';
import Rating from '../../components/Rating';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

export default function Profile() {
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

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        onBack={navigateBack}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerProfile}>
          <Image style={styles.profileAvatar} source={DummyAvatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Marcenaria Paulo</Text>
            <Text style={styles.profileCategory}>Marcenaria</Text>
            <Rating
              disabled
              count={3.5}
            />
          </View>
        </View>

        <Text style={styles.profileDescription}>
          Sou designer de bijuterias, gosto de fazer semijóias com materiais antialergênicos e procuro por parceiros que queiram vender
        </Text>

        <View style={styles.workSection}>
          <View style={styles.workFeaturedImg}>
            <Image style={styles.workImg} source={DummyImg} />
          </View>

          <Text style={styles.workTitle}>O que eu faço</Text>

          <Text style={styles.workDescription}>
          Maecenas a purus vulputate, ultricies erat sed, sagittis dolor. Mauris sit amet scelerisque libero. Morbi eleifend aliquam ipsum, vel feugiat magna elementum et. Nunc iaculis porta nisi, id malesuada nulla ultricies in. Duis ornare sapien nec justo viverra, vitae eleifend urna efficitur. Integer elit nisi, tempor sed arcu at, fermentum imperdiet risus. Proin lacinia placerat ligula, non imperdiet sem tincidunt vitae. Nunc iaculis porta nisi, id malesuada nulla ultricies in. Duis ornare sapien nec justo viverra, vitae eleifend urna efficitur. Integer elit nisi, tempor sed arcu at, fermentum imperdiet risus. Proin lacinia placerat ligula, non imperdiet sem tincidunt vitae.
          </Text>

          <View style={styles.socialNetwork}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.socialButton}
              >
                <Feather name="facebook" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
              >
                <Feather name="instagram" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
              >
                <Feather name="linkedin" size={24} color="#3858C1" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          buttonLabel="Conectar com Elina"
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <TextField
          value={text}
          placeholder="Sua mensagem para Elina"
          onChange={(text) => setText(text)}
        />
        <Button
          buttonLabel="Enviar mensagem"
          onPress={() => console.log('enviadoooo...')}
        />
      </Modal>
    </View>
  )
}
