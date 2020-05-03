import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import HomeIcon from '../../assets/home.svg';
import InfluenceIcon from '../../assets/influenciador.svg';
import ProfileIcon from '../../assets/profile.svg';
import Searchcon from '../../assets/search.svg';

// Styles
import styles from './styles';

export default function AppBottomNavbar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        // Handle tab label
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        // Handle tab icon
        let tabIcon;
        if (route.name === 'Home') {
          tabIcon = <HomeIcon width={32} height={32} />
        } else if (route.name === 'Partnerships') {
          tabIcon = <InfluenceIcon width={32} height={32} />
        } else if (route.name === 'Profile') {
          tabIcon = <ProfileIcon width={32} height={32} />
        } else if (route.name === 'Search') {
          tabIcon = <Searchcon width={32} height={32} />
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
            key={index}
          >
            <View
              style={[
                styles.activeIndicator,
                { backgroundColor: isFocused ? '#007AFF' : 'transparent' }
              ]}
            />
            <View>{tabIcon}</View>
            <Text style={styles.tabLabel}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
