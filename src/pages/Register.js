import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        const msg = `Registered ${username} (${email})`;
        if (Platform.OS === 'web') {
            // eslint-disable-next-line no-alert
            window.alert(msg);
        } else {
            console.log(msg);
        }
        window.location.pathname = '/Sales';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Text>Please enter your credentials to Register.</Text>
            <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Pressable style={styles.button} onPress={submit}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
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
