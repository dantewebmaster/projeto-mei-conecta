import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import Header from '../../components/Header';
import { getBusinessById } from '../../services/businessApi';
import ButtonEdit from '../../components/ButtonEdit';
import Rating from '../../components/Rating';

import { addImage } from '../../services/storageApi';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const navigation = useNavigation();
  const [profile, getProfile] = useState({});

  const [profileUrl, setProfileUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');

  function navigateBack() {
    navigation.goBack();
  }

  useEffect(() => {
    // Elegant way to use async/await
    async function getMyProfile() {
      try {
        const response = await getBusinessById('vBcnsrdMCzzzdTLWiPf6');
        getProfile({ ...response });
      } catch (error) {
        console.log(error)
      }
    }

    getMyProfile();
  }, []);

  async function uploadImageAsync(pictureUri, type) {
    const data = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new Error('uriToBlob failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', pictureUri, true);
      xhr.send(null);
    });

    addImage('vBcnsrdMCzzzdTLWiPf6', type, data);
  }

  pickImage = async (type) => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [4, 4],
      });

      if (!pickerResult.cancelled) {
        type === 'profile' ? setProfileUrl(pickerResult.uri) : setBannerUrl(pickerResult.uri);
      }

      uploadImageAsync(pickerResult.uri, type);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Meu perfil"
        onBack={navigateBack}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerProfile}>
          <Image
            style={styles.profileAvatar}
            source={{ uri: profile.profileUrl }}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profile.name}</Text>
            <Text style={styles.profileCategory}>{profile.category}</Text>
            <Rating
              disabled
              count={profile.rating}
            />
          </View>
          <ButtonEdit onPress={() => pickImage('profile')} />
        </View>

        <Text style={styles.profileDescription}>{ profile.about }</Text>

        <View style={styles.workSection}>
          <View style={styles.workFeaturedImg}>
            <ButtonEdit onPress={() => pickImage('banner')} />
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
