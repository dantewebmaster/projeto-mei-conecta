import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllPartnership } from '../../services/partnershipApi';

import styles from './styles';
import Header from '../../components/Header';
import Rating from '../../components/Rating';

const Detail = () => {
  const [partnerships, getPartnerships] = useState({});

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function getParnershipList() {
      await getAllPartnership('vBcnsrdMCzzzdTLWiPf6')
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
    </View>
  )
}

export default Detail;
