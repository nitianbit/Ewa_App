// app/login.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, ToggleButton, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState<'individual' | 'enterprise'>('individual');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`${userType} login with:`, { email, password });
    navigation.navigate('dashboard'); // Redirect to Dashboard after login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Login as</Title>
      <ToggleButton.Row
        onValueChange={(value) => setUserType(value as 'individual' | 'enterprise')}
        value={userType}
        style={styles.toggleRow}
      >
        <ToggleButton icon="account" value="individual" style={styles.toggleButton} />
        <ToggleButton icon="briefcase" value="enterprise" style={styles.toggleButton} />
      </ToggleButton.Row>

      <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      <TextInput label="Password" value={password} onChangeText={setPassword} mode="outlined" style={styles.input} secureTextEntry />
      <Button mode="outlined" onPress={handleLogin} style={styles.loginButton} icon="login">Login</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#005a9c',
  },
  toggleRow: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    borderRadius: 20,
    width: 140,
    height: 40,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#005a9c',
  },
  input: {
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#005a9c',
    borderWidth: 1,
  },
});
