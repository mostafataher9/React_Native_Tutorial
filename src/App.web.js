import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Sales from './pages/Sales';
import Login from './pages/Login';
import Register from './pages/Register';

function Layout() {
  const showAlert = (message) => {
    // eslint-disable-next-line no-alert
    window.alert(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Welcome to the App (Web)!</Text>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 200, height: 300, marginBottom: 12 }} />
      {/*<Image source={require('../assets/SeatRoom.jpg')} style={{ width: 200, height: 120, marginBottom: 16 }} /> */}
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
          {/* redirect root (index) to /home */}
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sales" element={<Sales />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
