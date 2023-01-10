import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import BrazilFlag from '../../assets/brazil-flag.png';

import * as Animatable from 'react-native-animatable';

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="flash"
        iterationDelay={1000}
        iterationCount="infinite">
        Seleção brasileira 2022!
      </Animatable.Text>

      <Animatable.Image
        source={BrazilFlag}
        style={styles.logo}
        animation="flipInY"
        delay={500}
      />
      <Animatable.View animation="fadeInUp" delay={200}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Ver seleção</Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}
