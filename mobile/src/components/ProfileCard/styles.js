import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 8,
    borderRadius: 6,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardInfos: {
    flex: 1,
    padding: 8,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#ddd',
  },
  cardWorkImage: {
    width: 160,
    height: 165,
  },
  cardName: {
    fontSize: 18,
    color: '#3858C1',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#999',
    padding: 8,
  },
  cardDivider: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
