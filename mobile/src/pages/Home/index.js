import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import formatMoney from '../../utils/formatMoney';
// import api from '../../services/api';

// import Logo from '../../assets/logo.png';
import styles from './styles';

export default function Partnerships() {
  // const [incidents, setIncidents] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // const navigation = useNavigation();

  // function navigateToDetail(incident) {
  //   navigation.navigate('Detail', { incident });
  // }

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
      <Text>Home...</Text>
    </View>
  )
}
