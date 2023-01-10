import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  position: {
    alignItems: 'center',
  },
  info: {
    marginBottom: 10,
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  title: {
    textTransform: 'uppercase',
    color: '#FEDF00',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  club: {
    alignItems: 'flex-end',
    width: 100,
  },

  shield: {
    width: 50,
    height: 50,
  },
});
