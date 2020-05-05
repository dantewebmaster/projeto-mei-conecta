import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllPartnership } from '../../services/partnershipApi';

import styles from './styles';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Modal from '../../components/Modal';
import TextField from '../../components/TextField';

const Partnership = () => {
  const [partnerships, getPartnerships] = useState({
    pending: [],
    accepted: [],
    rejected: [],
    canceled: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setDataModal] = useState({});

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function useModal(status, data) {
    setModalVisible(status);
    setDataModal(data);
  }

  useEffect(() => {
    async function getParnershipList() {
      await getAllPartnership('7e7TUk3HNNVNRHIbRZ1h')
      .then((resp) => {
        getPartnerships({
          pending: resp.filter(p => p.status === 0),
          accepted: resp.filter(p => p.status === 1),
          rejected: resp.filter(p => p.status === 2),
          canceled: resp.filter(p => p.status === 3),
        })})
      .catch((error) => console.log(error));
    }

    getParnershipList();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Minhas parcerias"
        // onBack={navigateBack}
      />

      <ScrollView style={styles.messagesContainer}>
        { partnerships.pending.length > 0 && (
          <View style={styles.messagesSection}>
            <Text style={styles.heading1}>Pendentes</Text>
            {/* Componentizar (Badge) */}
            <Text style={styles.badge}>{partnerships.pending.length}</Text>
            {/* Componentizar (MessageCard) */}
            { partnerships.pending.map(p => (
              <View style={styles.messageCard}>
                <Image style={styles.messageAvatar} source={{ uri: p.toBusinessId.profileUrl}} />
                <View style={styles.messageInfos}>
                  <Text style={styles.messageName}>{ p.toBusinessId.name }</Text>
                  <Text style={styles.category}>{ p.toBusinessId.category }</Text>
                  <Rating count={ p.toBusinessId.rating } />
                </View>
              </View>
            ))}
          </View>
        )}

        { partnerships.accepted.length > 0 && (
          <View style={styles.messagesSection}>
            <Text style={styles.heading1}>Aceitas</Text>
            {/* Componentizar (Badge) */}
            <Text style={styles.badge}>{partnerships.accepted.length}</Text>
            {/* Componentizar (MessageCard) */}
            { partnerships.accepted.map(p => (
              <TouchableOpacity style={styles.messageCard} onPress={() => useModal(true, p)}>
                <Image style={styles.messageAvatar} source={{ uri: p.toBusinessId.profileUrl}} />
                <View style={styles.messageInfos}>
                  <Text style={styles.messageName}>{ p.toBusinessId.name }</Text>
                  <Text style={styles.category}>{ p.toBusinessId.category }</Text>
                  <Rating count={ p.toBusinessId.rating } />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        { partnerships.rejected.length > 0 && (
          <View style={styles.messagesSection}>
            <Text style={styles.heading1}>Recusadas</Text>
            {/* Componentizar (Badge) */}
            <Text style={styles.badge}>{partnerships.rejected.length}</Text>
            {/* Componentizar (MessageCard) */}
            { partnerships.rejected.map(p => (
              <View style={styles.messageCard}>
                <Image style={styles.messageAvatar} source={{ uri: p.toBusinessId.profileUrl}} />
                <View style={styles.messageInfos}>
                  <Text style={styles.messageName}>{ p.toBusinessId.name }</Text>
                  <Text style={styles.category}>{ p.toBusinessId.category }</Text>
                  <Rating count={ p.toBusinessId.rating } />
                </View>
              </View>
            ))}
          </View>
        )}

        { partnerships.canceled.length > 0 && (
          <View style={styles.messagesSection}>
            <Text style={styles.heading1}>Canceladas</Text>
            {/* Componentizar (Badge) */}
            <Text style={styles.badge}>{partnerships.canceled.length}</Text>
            {/* Componentizar (MessageCard) */}
            { partnerships.canceled.map(p => (
              <View style={styles.messageCard}>
                <Image style={styles.messageAvatar} source={{ uri: p.toBusinessId.profileUrl}} />
                <View style={styles.messageInfos}>
                  <Text style={styles.messageName}>{ p.toBusinessId.name }</Text>
                  <Text style={styles.category}>{ p.toBusinessId.category }</Text>
                  <Rating count={ p.toBusinessId.rating } />
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <View style={styles.inviteCard}>
          <View style={styles.textInfos}>
            <Text style={styles.textInfos}>{ modalData?.invite }</Text>
          </View>
          <Image style={styles.textAvatar} 
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/parceria-facil.appspot.com/o/%207e7TUk3HNNVNRHIbRZ1h%2Fprofile.jpg?alt=media&token=1ad7eb46-9845-4b39-a7c7-c54dff335b4e'
            }} 
          />
        </View>
        <View style={styles.responseCard}>
          <Image style={styles.textAvatar} source={{ uri: modalData?.toBusinessId?.profileUrl}} />
          <View style={styles.textInfos}>
            <Text style={styles.textInfos}>{ modalData?.reason }</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Partnership;
