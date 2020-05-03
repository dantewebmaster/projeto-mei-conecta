import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  logo: {
    width: 150,
    height: 24,
    alignSelf: 'center',
    backgroundColor: '#ddd',
    resizeMode: 'cover',
    marginVertical: 16,
  },

  fakeSearchFieldContainer: {
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  fakeSearchField: {
    marginBottom: 16,
    marginTop: 16,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingLeft: 24,
    shadowColor: "#ddd",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,

    borderWidth: 1,
    borderColor: '#d7d7d7',
    elevation: 8,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  fakeSearchFieldText: {
    fontSize: 22,
  },
});
