import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './pages/Home';
import Partnerships from './pages/Partnerships';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Details from './pages/Details';

// Bottom navbar
import AppBottomNavbar from './components/AppBottomNavbar';

const AppDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <NavigationContainer theme={AppDefaultTheme}>
        <Tab.Navigator tabBar={props => <AppBottomNavbar {...props} />}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Tela inicial'
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Buscar parceria'
            }}
          />
          <Tab.Screen
            name="Partnerships"
            component={Partnerships}
            options={{
              tabBarLabel: 'Minhas parcerias'
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu perfil'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    // Return logged out stack (login screen, sign up, etc...)
  }
}
