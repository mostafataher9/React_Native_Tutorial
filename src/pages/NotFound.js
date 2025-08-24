import { View, Text, StyleSheet } from 'react-native';
export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the NotFound Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
