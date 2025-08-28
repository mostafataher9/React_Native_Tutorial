import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform, Alert } from 'react-native';

export default function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        //checking if email entered or username
        const isEmail = identifier.includes('@');
        const who = isEmail ? `email ${identifier}` : `username ${identifier}`;
        const msg = `Logging in with ${who}`;
        if (Platform.OS === 'web') {
            // quick feedback for web
            // eslint-disable-next-line no-alert
            window.alert(msg);
        } else {
            Alert.alert('Login', msg);
        }
        window.location.pathname = '/Sales';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {/* here we enter either username or email */}
            <TextInput
                style={styles.input}
                placeholder="Username or email"
                value={identifier}
                onChangeText={setIdentifier}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.button} onPress={submit}>
                <Text style={styles.buttonText}>Login</Text>
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
                    <Text style={styles.buttonText}>No account</Text>
                  </Pressable>
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
    input: {
        width: '100%',
        maxWidth: 320,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 6,
        marginVertical: 8,
    },
    button: {
        marginTop: 12,
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
