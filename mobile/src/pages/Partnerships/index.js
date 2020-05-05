import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { getAllPartnership } from '../../services/partnershipApi';

import styles from './styles';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import MessageCard from '../../components/MessageCard';

const Partnership = () => {
  const [partnerships, setPartnerships] = useState({
    pending: [],
    accepted: [],
    rejected: [],
    canceled: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setDataModal] = useState({});
  const [loading, setLoading] = useState(false);

  async function getParnershipList() {
    try {
      setLoading(true);
      const response = await getAllPartnership('7e7TUk3HNNVNRHIbRZ1h');

      setPartnerships({
        pending: response.filter(p => p.status === 0),
        accepted: response.filter(p => p.status === 1),
        rejected: response.filter(p => p.status === 2),
        canceled: response.filter(p => p.status === 3),
      })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function useModal(status, data) {
    setModalVisible(status);
    setDataModal(data);
  }

  useEffect(() => {
    getParnershipList();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Minhas parcerias"
      />

      { loading && (
        <Loader />
      )}

      {!loading && (
        <ScrollView
          style={styles.messagesContainer}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={getParnershipList}
            />
          }
        >
          {partnerships.pending.length > 0 && (
            <View style={styles.messagesSection}>
              <Text style={styles.heading1}>Pendentes</Text>

              {/* Componentizar (Badge) */}
              <View style={styles.badge}>
                <Text>
                  {partnerships.pending.length}
                </Text>
              </View>

              {partnerships.pending.map((p, index) => (
                <MessageCard
                  key={index}
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                  onPress={() => useModal(true, p)}
                />
              ))}
            </View>
          )}

          {partnerships.accepted.length > 0 && (
            <View style={styles.messagesSection}>
              <Text style={styles.heading1}>Aceitas</Text>

              {/* Componentizar (Badge) */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {partnerships.pending.length}
                </Text>
              </View>

              {partnerships.accepted.map((p, index) => (
                <MessageCard
                  key={index}
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                  onPress={() => useModal(true, p)}
                />
              ))}
            </View>
          )}

          {partnerships.rejected.length > 0 && (
            <View style={styles.messagesSection}>
              <Text style={styles.heading1}>Recusadas</Text>

              {/* Componentizar (Badge) */}
              <Text style={styles.badge}>{partnerships.rejected.length}</Text>

              {partnerships.rejected.map(p => (
                <MessageCard
                  key={index}
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                  onPress={() => useModal(true, p)}
                />
              ))}
            </View>
          )}

          {partnerships.canceled.length > 0 && (
            <View style={styles.messagesSection}>
              <Text style={styles.heading1}>Canceladas</Text>

              {/* Componentizar (Badge) */}
              <Text style={styles.badge}>{partnerships.canceled.length}</Text>

              {/* Componentizar (MessageCard) */}
              {partnerships.canceled.map((p, index)=> (
                <MessageCard
                  key={index}
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                  onPress={() => useModal(true, p)}
                />
              ))}
            </View>
          )}
        </ScrollView>
      )}

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
