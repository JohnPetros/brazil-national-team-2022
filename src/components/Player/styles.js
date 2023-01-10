import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#009B3A',
  },

  name: {
    color: '#009B3A',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 2,
  },

  image: {
    width: 220,
    height: 255,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: '#009B3A',
  },
});
