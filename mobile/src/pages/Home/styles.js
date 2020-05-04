import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  logo: {
    height: 'auto',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginVertical: 16,
  },

  // Componentizar
  fakeSearchFieldContainer: {
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  fakeSearchField: {
    marginVertical: 8,
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 24,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  fakeSearchFieldText: {
    fontSize: 22,
    color: '#999',
    marginLeft: 16,
  },
});
