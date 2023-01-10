import { TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';

export function PlayersListItem({ name, image, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected
          ? { backgroundColor: '#047C3F' }
          : { backgroundColor: '#FFF' },
      ]}
      onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text
        style={[
          styles.name,
          isSelected ? { color: '#FEDF00' } : { color: '#000' },
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
