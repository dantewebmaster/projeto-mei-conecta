import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './pages/Home';
import Partnerships from './pages/Partnerships';
import Profile from './pages/Profile';

// Bottom navbar
import AppBottomNavbar from './components/AppBottomNavbar';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <AppBottomNavbar {...props} />}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Tela Inicial'
            }}
          />
          <Tab.Screen
            name="Partnerships"
            component={Partnerships}
            options={{
              tabBarLabel: 'Minhas Parcerias'
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu Perfil'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    // Return logged out stack (login screen, sign up)
  }
}
