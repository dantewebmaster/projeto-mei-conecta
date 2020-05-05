import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { getAllPartnership } from '../../services/partnershipApi';

import styles from './styles';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Loader from '../../components/Loader';
import MessageCard from '../../components/MessageCard';

const Partnership = () => {
  const [partnerships, setPartnerships] = useState({
    pending: [],
    accepted: [],
    rejected: [],
    canceled: [],
  });
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

  useEffect(() => {
    getParnershipList();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Minhas parcerias"
      />

      {loading && (
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
              <Text style={styles.badge}>{partnerships.pending.length}</Text>

              {partnerships.pending.map(p => (
                <MessageCard
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                />
              ))}
            </View>
          )}

          {partnerships.accepted.length > 0 && (
            <View style={styles.messagesSection}>
              <Text style={styles.heading1}>Aceitas</Text>

              {/* Componentizar (Badge) */}
              <Text style={styles.badge}>{partnerships.accepted.length}</Text>

              {partnerships.accepted.map(p => (
                <MessageCard
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
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
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
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
              {partnerships.canceled.map(p => (
                <MessageCard
                  name={p.toBusinessId.name}
                  category={p.toBusinessId.category}
                  profileUrl={p.toBusinessId.profileUrl}
                  rating={p.toBusinessId.rating}
                />
              ))}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  )
}

export default Partnership;
