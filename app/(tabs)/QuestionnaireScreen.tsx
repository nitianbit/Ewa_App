import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function QuestionnaireScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = ['What is your profession?', 'What are your hobbies?', 'What is your experience level?'];
  const [answers, setAnswers] = useState<string[]>([]);

  const handleNext = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const handleSkip = () => {
    setAnswers([...answers, 'Skipped']);
    setQuestionIndex(questionIndex + 1);
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    alert('Thank you for completing the questionnaire!');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{questions[questionIndex] || 'All done!'}</Title>
      {questionIndex < questions.length ? (
        <>
          <TextInput
            label="Your Answer"
            mode="outlined"
            style={styles.input}
            onChangeText={(text) => (answers[questionIndex] = text)}
          />
          <Button mode="outlined" onPress={handleNext} style={styles.button}>
            Next
          </Button>
          <Button mode="outlined" onPress={handleSkip} style={styles.button}>
            Skip
          </Button>
        </>
      ) : (
        <Button mode="outlined" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      )}
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
