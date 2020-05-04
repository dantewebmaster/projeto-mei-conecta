import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  messagesSection: {
    marginBottom: 24,
  },

  // Componentizar (MessageCard)
  messageCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  messageName: {
    fontSize: 18,
    color: '#3858C1',
    marginBottom: 4,
  },
  category: {
    marginBottom: 8,
  },
  messageAvatar: {
    marginRight: 16,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ddd',
    backgroundColor: '#ddd',
  },

  // Componentizar (Badge)
  badge: {
    backgroundColor: '#7ED321',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    textAlign: 'center',
    marginBottom: -10,
    marginRight: 5,
    zIndex: 999,
    fontSize: 14,
    alignSelf: 'flex-end',
    color: '#fff',
    lineHeight: 22,
  },

  // Componentizar (h1)
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3858C1',
    marginBottom: 8,
  },
});
