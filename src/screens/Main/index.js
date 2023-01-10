import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { PLAYERS } from '../../data/players';

import { Header } from '../../components/Header/index';
import { Player } from '../../components/Player/index';
import { PlayersList } from '../../components/PlayersList/index';

import styles from './styles';

export function Main() {
  const [selectedPlayer, setSelectedPlayer] = useState(PLAYERS[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Header selectedPlayer={selectedPlayer} />
      <Player selectedPlayer={selectedPlayer} />
      <PlayersList
        onChangePlayer={setSelectedPlayer}
        selectedPlayer={selectedPlayer}
      />
    </SafeAreaView>
  );
}
