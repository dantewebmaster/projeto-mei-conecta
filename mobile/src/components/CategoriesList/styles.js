import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  categoriesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    width: '48%',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,

    // shadowColor: "#666",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
