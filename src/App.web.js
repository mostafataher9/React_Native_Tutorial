import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Layout() {
  const showAlert = (message) => {
    // eslint-disable-next-line no-alert
    window.alert(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Welcome to the App (Web)!</Text>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 200, height: 300, marginBottom: 12 }} />
      <Image source={require('../assets/luxury-holiday-home.jpg')} style={{ width: 200, height: 120, marginBottom: 16 }} />
      <Pressable style={styles.webButton} onPress={() => showAlert('Pressable pressed')}>
        <Text style={styles.webButtonText}>Pressable</Text>
      </Pressable>
      <Outlet />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  webButton: {
    marginTop: 12,
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  webButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
