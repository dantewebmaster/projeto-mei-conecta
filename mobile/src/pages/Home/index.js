import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllBusiness } from '../../services/businessApi';
import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';
import Loader from '../../components/Loader';

export default function Home() {
  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }

  function handleNavigateToDetails(businessId) {
    navigation.navigate('Details', { businessId })
  }

  async function getBusinessList() {
    try {
      setLoading(true);

      const response = await getAllBusiness({});

      setBusiness([...response]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getBusinessList();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]} // component with index [1] is sticky
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={getBusinessList}
          />
        }
      >
        <View style={styles.logo}>
          <Logo width={200} height={60} />
        </View>

        <TouchableOpacity
          onPress={navigateToSearch}
          style={styles.fakeSearchFieldContainer}
        >
          <View style={styles.fakeSearchField}>
            <Feather name="search" size={32} color="#999" />
            <Text style={styles.fakeSearchFieldText}>O que você procura?</Text>
          </View>
        </TouchableOpacity>

        {loading && (
          <Loader />
        )}

        {!loading && business?.map((businessItem, index) => (
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
        ))}
      </ScrollView>
    </View>
  )
}
