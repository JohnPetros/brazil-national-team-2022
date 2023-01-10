import { Text, View, Image } from 'react-native';

import { FootballField } from '../FootballField/index';

import { styles } from './styles';

import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

import * as Animatable from 'react-native-animatable';

export function Header({ selectedPlayer }) {
  
function calculateAge(date) {
  const currentYear = new Date().getFullYear()
  const year =  new Date(date).getFullYear();

  const age = currentYear - year;
  return age;
}

  const birthDate = dayjs(selectedPlayer.birthDate)
    .locale(ptBR)
    .format('MMMM D, YYYY');

    const age = calculateAge(selectedPlayer.birthDate);

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.position} animation="fadeInLeft" delay={200}>
        <Text style={styles.title}>Posição</Text>
        <FootballField position={selectedPlayer.position_id} />
      </Animatable.View>
      
      <Animatable.View animation="fadeInRight" delay={200}>
        <View style={styles.info}>
          <Text style={styles.title}>Altura</Text>
          <Text style={styles.text}>{selectedPlayer.height}m</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Data de nascimento/Idade</Text>
          <Text style={styles.text}>{birthDate} ({age} anos)</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Clube</Text>
          <View style={styles.club}>
            <Image
              source={{
                uri: selectedPlayer.club.shield,
              }}
              style={styles.shield}
            />
            <Text style={styles.text}>{selectedPlayer.club.name}</Text>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}
