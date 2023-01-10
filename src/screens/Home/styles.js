import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEDF00',
    paddingHorizontal: 10,
  },

  title: {
    color: '#009B3A',
     fontSize: 24,
    fontWeight: 'bold',
    textTransform:  'uppercase',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 45,

  },

  button: {
    backgroundColor: '#009B3A',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FEDF00',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
