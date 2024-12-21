import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-paper';

const appointments = [
  { id: 1, service: 'Ultra Sound Scanning', date: '2024-12-09', time: '10:00 AM' },
  { id: 2, service: 'Laboratory Services', date: '2024-12-10', time: '2:00 PM' },
  { id: 3, service: '2D ECHO & ECG', date: '2024-12-11', time: '8:00 AM' },
  { id: 4, service: 'Digital X-Ray', date: '2024-12-12', time: '11:30 AM' },
];

export default function AppointmentsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* <Text style={styles.title}>Your Appointments</Text> */}
      {appointments.map((appointment) => (
        <Card key={appointment.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.serviceName}>{appointment.service}</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.date}>{appointment.date}</Text>
              <Text style={styles.time}>{appointment.time}</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#005a9c',
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 3,
    padding: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#777',
  },
});
