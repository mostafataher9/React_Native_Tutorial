import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this app</Text>
      <Text>This is a small demo app showing cross-platform routing and assets.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
});
