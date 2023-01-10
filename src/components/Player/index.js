import { Text, View, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

export function Player({selectedPlayer}) {
  return (
    <Animatable.View style={styles.container} animation="fadeInDown">
      <Text style={styles.name}>{selectedPlayer.number}# {selectedPlayer.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: selectedPlayer.image,
        }}
      />
    </Animatable.View>
  );
}
