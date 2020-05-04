import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllBusiness } from '../../services/businessApi';
import { addImage } from '../../services/storageApi';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { Feather } from '@expo/vector-icons';

import LogoPF from '../../assets/logo-pf.png';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';

export default function Home() {
  const [business, getBusiness] = useState([]);
  const [profileUrl, setProfileUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }

  function handleNavigateToDetails(businessId) {
    navigation.navigate('Details', { businessId })
  }

  async function getBusinessList() {
    await getAllBusiness({})
    .then((resp) => {
      getBusiness([ ...resp ])})
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getBusinessList();
  }, []);

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

  async function uploadImageAsync (pictureUri, type) {
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

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]} // component with index [1] is sticky
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.logo} source={LogoPF} />

        <TouchableOpacity
          onPress={navigateToSearch}
          style={styles.fakeSearchFieldContainer}
        >
          <View style={styles.fakeSearchField}>
            <Feather name="search" size={22} color="#999" />
            <Text style={styles.fakeSearchFieldText}>O que você procura?</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.fakeSearchFieldText}>Escolha sua imagem de perfil</Text>
          <Button
            onPress={() => pickImage('profile')}
            title="Upload Perfil"
          />
        </View>
        {/* <Image source={{ uri: profileUrl }} /> */}

        <View>
          <Text style={styles.fakeSearchFieldText}>Escolha sua imagem de capa</Text>
          <Button
            onPress={() => pickImage('banner')}
            title="Upload Banner"
          />
        </View>
        {/* <Image source={{ uri: bannerUrl }} /> */}

        { business.map((businessItem, index) =>
            <ProfileCard
              key={index}
              name={businessItem.name}
              category={businessItem.category}
              rating={businessItem.rating}
              workImage={businessItem.bannerUrl}
              avatar={businessItem.profileUrl}
              description={businessItem.about}
              onPress={() => handleNavigateToDetails(businessItem.id)}
            />
          )
        }
      </ScrollView>
    </View>
  )
}
