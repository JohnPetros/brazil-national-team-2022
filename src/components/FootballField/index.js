import { View, Image, Text } from 'react-native';

import { POSITIONS } from '../../data/positions';

import { styles } from './styles';

export function FootballField({position}) {

  return (
    <View style={styles.container}>
      <Image style={styles.footballField} source={POSITIONS[--position].icon} />
      <Text style={styles.title}>
        {POSITIONS[position].title}
      </Text>
    </View>
  );
}