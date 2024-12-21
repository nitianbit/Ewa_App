import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function OtpScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    console.log('Entered OTP:', otp);
    navigation.navigate('Questionnaire');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Enter OTP</Title>
      <TextInput
        label="OTP"
        value={otp}
        onChangeText={setOtp}
        mode="outlined"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button mode="outlined" onPress={handleOtpSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#005a9c',
  },
  input: {
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#005a9c',
    borderWidth: 1,
  },
});
