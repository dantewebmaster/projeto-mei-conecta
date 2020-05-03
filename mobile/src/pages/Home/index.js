import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import formatMoney from '../../utils/formatMoney';
// import api from '../../services/api';

import LogoPF from '../../assets/logo-pf.png';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';

import DummyImg from '../../assets/dummy-img.png';
import DummyPetImg from '../../assets/pet.jpg';
import DummyAvatar from '../../assets/paulo.png';

export default function Partnerships() {
  // const [incidents, setIncidents] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
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

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]} // component with index [1] is sticky
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

        <ProfileCard
          name="Elina Naomi"
          category="Design"
          workImage={DummyImg}
          avatar={DummyAvatar}
          description="Sou designer de bijuterias, gosto de fazer semijóias com materiais antialergênicos e procuro por parceiros que queiram vender"
          onPress={() => navigation.navigate('Details')}
        />
        <ProfileCard
          name="Fotografias para petshop"
          category="Designer"
          workImage={DummyPetImg}
          avatar={DummyAvatar}
          description="Faço fotografias de animais para petshop e afins. Busco um parceiro do ramo de petshop para grandes lucros vendendo imagens para a TV por assinatura"
          onPress={() => console.log('...')}
        />
        <ProfileCard
          name="Fotografias para petshop"
          category="Designer"
          workImage={DummyPetImg}
          avatar={DummyAvatar}
          description="Faço fotografias de animais para petshop e afins. Busco um parceiro do ramo de petshop para grandes lucros vendendo imagens para a TV por assinatura"
          onPress={() => console.log('...')}
        />
      </ScrollView>
    </View>
  )
}
