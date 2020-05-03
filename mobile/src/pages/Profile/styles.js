import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  headerProfile: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileAvatar: {
    backgroundColor: '#d7d7d7',
    borderRadius: 80,
    height: 80,
    width: 80,
    marginRight: 16,
  },
  profileName: {
    color: '#3858C1',
    fontSize: 18,
  },
  profileCategory: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  // compontizar
  profileStars: {
    marginTop: 8,
    flexDirection: 'row',
  },
  star: {
    width: 14,
    height: 14,
    marginRight: 6,
  },

  profileDescription: {
    fontSize: 14,
    color: '#999',
    marginBottom: 16,
  },
  workFeaturedImg: {
    alignItems: 'flex-end',
  },
  workImg: {
    width: '100%',
    marginTop: 8,
  },
  workTitle: {
    fontSize: 24,
    marginVertical: 8,
  },
  workDescription: {
    color: '#999',
  },
  socialNetwork: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 40,
  },
  socialButton: {
    marginRight: 16,
  },
});
