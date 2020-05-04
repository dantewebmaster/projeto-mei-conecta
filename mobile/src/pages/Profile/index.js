import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import Header from '../../components/Header';
import { getBusinessById } from '../../services/businessApi';
import ButtonEdit from '../../components/ButtonEdit';
import Rating from '../../components/Rating';

export default function Profile() {
  const navigation = useNavigation();
  const [profile, getProfile] = useState({});

  function navigateBack() {
    navigation.goBack();
  }

  async function getMyProfile() {
    await getBusinessById('vBcnsrdMCzzzdTLWiPf6')
    .then((resp) => {
      getProfile({ ...resp })})
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Meu perfil"
        onBack={navigateBack}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerProfile}>
          <Image style={styles.profileAvatar} source={{ uri: profile.profileUrl}} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profile.name}</Text>
            <Text style={styles.profileCategory}>{profile.category}</Text>
            <Rating
              disabled
              count={profile.rating}
            />
          </View>
          <ButtonEdit onPress={() => console.log('Editando...')} />
        </View>

        <Text style={styles.profileDescription}>{ profile.about }</Text>

        <View style={styles.workSection}>
          <View style={styles.workFeaturedImg}>
            <ButtonEdit onPress={() => console.log('Editando...')} />
            <Image style={styles.workImg} source={{ uri: profile.bannerUrl}} />
          </View>

          <Text style={styles.workTitle}>O que eu faço</Text>

          <Text style={styles.workDescription}>{ profile.description }</Text>

          <View style={styles.socialNetwork}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(profile.socialNetworks.facebook)}}
              >
                <Feather name="facebook" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(profile.socialNetworks.instagram)}}
              >
                <Feather name="instagram" size={24} color="#3858C1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={()=>{ Linking.openURL(profile.socialNetworks.linkedin)}}
              >
                <Feather name="linkedin" size={24} color="#3858C1" />
              </TouchableOpacity>
            </View>

            <ButtonEdit style={{ alignSelf: 'flex-end' }} onPress={() => console.log('Editando...')} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
