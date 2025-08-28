//edit end of the pages + icons and sales images in sales page

import { Image, ImageBackground, View, Text, StyleSheet, Pressable, Platform } from 'react-native';

export default function Home() {
  return (
    <ImageBackground source={require('../../assets/SeatRoom.jpg')} style={styles.container}>
      <Image source={require('../../assets/sale-sign.png')} style={styles.saleSign} resizeMode="contain" />
      <Text style={styles.title}>Sell what You Don't Need</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (Platform.OS === 'web') {
            // simple web navigation; if you prefer react-router hooks we can refactor
            window.location.pathname = '/login';
          } else {
            // native: integrate React Navigation if you want in-app navigation
            console.log('Navigate to login (native)');
          }
        }}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.primary]}
        onPress={() => {
          if (Platform.OS === 'web') {
            window.location.pathname = '/register';
          } else {
            console.log('Navigate to register (native)');
          }
        }}
      >
        <Text style={styles.buttonText}>Go to Register</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleSign: {
    width: 160,
    height: 160,
    marginBottom: 16,
    textAlign: 'center',
    JustifyContent: 'center'
  },
  title: {
    fontSize: 18,
    color: '#111',
  },
});
