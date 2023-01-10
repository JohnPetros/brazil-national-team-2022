import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 75,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 7,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
    marginLeft: 5,
  },
    image: {
    width: 55,
    height: 55,
    borderRadius: 5,
    resizeMode: 'cover',
  }
});

export default styles;