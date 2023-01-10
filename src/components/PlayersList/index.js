import { Text, View, FlatList } from 'react-native';

import { PlayersListItem } from '../PlayersListItem/index';

import { PLAYERS } from '../../data/players';

import * as Animatable from 'react-native-animatable';

import styles from './styles';

export function PlayersList({ onChangePlayer, selectedPlayer }) {
  return (
    <Animatable.View style={styles.container} animation="fadeInUp" delay={200}>
      <Text style={styles.title}>Escolha um jogador</Text>
      <FlatList
        data={PLAYERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayersListItem
            name={item.name}
            image={item.image}
            onPress={() => onChangePlayer(item)}
            isSelected={item.name === selectedPlayer.name}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </Animatable.View>
  );
}
