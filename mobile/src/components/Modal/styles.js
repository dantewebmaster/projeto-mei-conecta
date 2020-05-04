import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BottomHalfModal
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  buttonCloseModal: {
    alignSelf: 'flex-end',
  },

  // FullScreenModal
  fullScreenModalContainer: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenModalTitle: {
    color: '#3DC24C',
    fontSize: 30,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  fullScreenModalDescription: {
    fontSize: 18,
    color: '#292929',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 28,
  },
});
