import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState({
    physicalActivity: '',
    diet: '',
    smoking: '',
    sleep: '',
    chronicConditions: '',
    stress: '',
    familyHistory: '',
    alcohol: '',
    checkUps: '',
    mentalHealth: '',
  });

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      {['physicalActivity', 'diet', 'smoking', 'sleep', 'chronicConditions', 'stress', 'familyHistory', 'alcohol', 'checkUps', 'mentalHealth'].map((question) => (
        <View key={question} style={styles.questionContainer}>
          <Text style={styles.question}>{`How often do you ${question.replace(/([A-Z])/g, ' $1')}`}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Select answer for ${question}`}
            value={answers[question]}
            onChangeText={(value) => handleChange(question, value)}
          />
        </View>
      ))}
      <Button title="Save" onPress={() => console.log('Profile updated!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
  },
});
