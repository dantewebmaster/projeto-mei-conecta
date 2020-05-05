import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 24,
    alignSelf: 'center',
    backgroundColor: '#ddd',
    resizeMode: 'cover',
    marginVertical: 16,
  },

  searchFieldContainer: {
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 16,
  },
  searchField: {
    borderColor: '#d7d7d7',
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 8,
    width: '100%',
    height: 60,
    padding: 16,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    color: '#424242',
    fontSize: 22,
  },

  // Componentizar (heading2)
  heading2: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
