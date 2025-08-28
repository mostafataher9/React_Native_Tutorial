import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert, Platform } from 'react-native';

const placeholders = new Array(6).fill(null).map((_, i) => ({ id: i + 1 }));

export default function Sales() {
  const onPress = (id) => {
    const msg = `Clicked icon ${id}`;
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-alert
      window.alert(msg);
    } else {
      Alert.alert('Icon', msg);
    }
  };

  return (
    <View style={styles.container}>
      {/*One-dimensional layout: Flexbox is best for laying out items in a single row or column (either horizontally or vertically)
       Two-dimensional layout: Grid is designed for laying out items both in rows and columns simultaneously. */}
      <Text style={styles.title}>Sales</Text>
      <Text style={{ marginBottom: 12 }}>Tap an icon:</Text>
      <View style={styles.grid}>
        {placeholders.map((p) => (
          <Pressable key={p.id} style={styles.iconWrap} onPress={() => onPress(p.id)}>
            <View style={styles.iconPlaceholder}>
              <Text style={styles.iconText}>{p.id}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  grid: {
    width: '100%',
    maxWidth: 480,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconWrap: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 12,
  },
  iconPlaceholder: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
});
