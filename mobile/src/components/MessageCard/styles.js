import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
