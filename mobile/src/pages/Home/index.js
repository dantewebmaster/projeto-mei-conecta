import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllBusiness } from '../../services/businessApi';

import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';

export default function Home() {
  const [business, getBusiness] = useState([]);
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }

  function handleNavigateToDetails(businessId) {
    navigation.navigate('Details', { businessId })
  }

  useEffect(() => {
    async function getBusinessList() {
      await getAllBusiness({})
      .then((resp) => {
        getBusiness([ ...resp ])})
      .catch((error) => console.log(error));
    }

    getBusinessList();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]} // component with index [1] is sticky
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logo}>
          <Logo width={200} height={60} />
        </View>

        <TouchableOpacity
          onPress={navigateToSearch}
          style={styles.fakeSearchFieldContainer}
        >
          <View style={styles.fakeSearchField}>
            <Feather name="search" size={22} color="#999" />
            <Text style={styles.fakeSearchFieldText}>O que você procura?</Text>
          </View>
        </TouchableOpacity>

        {/* <View>
          <Text style={styles.fakeSearchFieldText}>Escolha sua imagem de perfil</Text>
          <Button
            onPress={() => pickImage('profile')}
            title="Upload Perfil"
          />
        </View> */}
        {/* <Image source={{ uri: profileUrl }} /> */}

        {/* <View>
          <Text style={styles.fakeSearchFieldText}>Escolha sua imagem de capa</Text>
          <Button
            onPress={() => pickImage('banner')}
            title="Upload Banner"
          />
        </View> */}
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
