import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  tabItem: {
    marginBottom: 10,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#979797',
  },
  tabLabel: {
    maxWidth: 60,
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 4,
  },
  activeIndicator: {
    marginTop: -3,
    marginBottom: 6,
    height: 6,
    backgroundColor: '#007AFF',
    width: '100%',
  },
});
