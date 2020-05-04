import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MessageSentIlustra from '../../assets/message-sent.svg';
import { getBusinessById } from '../../services/businessApi';

// Components
import Header from '../../components/Header';
import DummyAvatar from '../../assets/paulo.png';
import DummyImg from '../../assets/dummy-img.png';
import Rating from '../../components/Rating';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

// Styles
import styles from './styles';
import FullScreenModal from '../../components/Modal/FullScreenModal';

export default function Profile() {
  const [businessDetails, setBusinessDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [text, setText] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const businessId = route.params.businessId;

  function navigateBack() {
    navigation.goBack();
  }

  async function getBusinessDetails() {
    await getBusinessById(businessId)
    .then((resp) => {
      setBusinessDetails({ ...resp })})
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getBusinessDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        onBack={navigateBack}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerProfile}>
          <Image style={styles.profileAvatar} source={{ uri: businessDetails.profileUrl }} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{ businessDetails.name }</Text>
            <Text style={styles.profileCategory}>{ businessDetails.category }</Text>
            <Rating
              disabled
              count={businessDetails.rating}
            />
          </View>
        </View>

        <Text style={styles.profileDescription}>
          { businessDetails.about }
        </Text>

        <View style={styles.workSection}>
          <View style={styles.workFeaturedImg}>
            <Image style={styles.workImg} source={{ uri: businessDetails.bannerUrl }} />
          </View>

          <Text style={styles.workTitle}>O que eu faço</Text>

          <Text style={styles.workDescription}>
            { businessDetails.description }
          </Text>

          <View style={styles.socialNetwork}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(businessDetails.socialNetworks.facebook)}}
              >
                <Feather name="facebook" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(businessDetails.socialNetworks.instagram)}}
              >
                <Feather name="instagram" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(businessDetails.socialNetworks.linkedin)}}
              >
                <Feather name="linkedin" size={24} color="#3858C1" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          buttonLabel={`Conectar com ${businessDetails.name}`}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <TextField
          value={text}
          placeholder={`Sua mensagem para ${businessDetails.name}`}
          onChange={(text) => setText(text)}
          multiline
          numberOfLines={8}
          height={150}
        />
        <Button
          buttonLabel="Enviar mensagem"
          onPress={() => setMessageModalVisible(true)}
        />
      </Modal>

      <FullScreenModal
        visible={messageModalVisible}
        title="Mensagem enviada!"
        description="Você está próximo a essa nova conexão. Aguarde a resposta dessa nova parceria de sucesso!"
        ilustra={<MessageSentIlustra width={267} height={221} />}
        buttonLabel="OK!"
        onButtonPress={() => {
          navigation.navigate('Home')
          setMessageModalVisible(false)
        }}
      />
    </View>
  )
}
