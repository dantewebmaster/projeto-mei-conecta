import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAllBusiness } from '../../services/businessApi';

import LogoPF from '../../assets/logo-pf.png';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';

import DummyImg from '../../assets/dummy-img.png';
import DummyPetImg from '../../assets/pet.jpg';
import DummyAvatar from '../../assets/paulo.png';

export default function Partnerships() {
  const [business, getBusiness] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }

  function handleNavigateToDetails() {
    navigation.navigate('Details')
  }

  // async function loadIncidents() {
  //   if (loading) {
  //     return;
  //   }

  //   if (total > 0 && incidents.length === total) {
  //     return;
  //   }

  //   setLoading(true);

  //   const response = await api.get('/incidents', {
  //     params: { page }
  //   });

  //   setTotal(response.headers['x-total-count']);
  //   setIncidents([...incidents, ...response.data]);
  //   setPage(page + 1);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   loadIncidents();
  // }, []);

  async function getBusinessList() {
    await getAllBusiness()
    .then((resp) => {
      getBusiness([ ...resp ])})
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getBusinessList();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        // stickyHeaderIndices={[1]} // component with index [1] is sticky
        showsVerticalScrollIndicator={false}
        // bounces={false}
        // refreshing={false}
      >
        <Image style={styles.logo} source={LogoPF} />

        <TouchableOpacity
          onPress={navigateToSearch}
          style={styles.fakeSearchFieldContainer}
        >
          <View style={styles.fakeSearchField}>
            <Text style={styles.fakeSearchFieldText}>O que você procura?</Text>
          </View>
        </TouchableOpacity>

        { 
          business.map((businessItem) => 
            <ProfileCard
              key={businessItem.id}
              name={businessItem.name}
              category={businessItem.category}
              workImage={DummyImg}
              avatar={DummyAvatar}
              description={businessItem.about}
              onPress={handleNavigateToDetails}
          />
          )
        }
      </ScrollView>
    </View>
  )
}
