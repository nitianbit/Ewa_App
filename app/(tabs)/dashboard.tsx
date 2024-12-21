import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth } = Dimensions.get('window');

const banners = [
  { id: 1, imageUrl: 'https://i.ibb.co/DKw8dS1/offer1.jpg', text: 'Get 20% off on Lab Tests!' },
  { id: 2, imageUrl: 'https://i.ibb.co/Jm2Kppn/offer2.jpg', text: 'Exclusive Discount on Health Checkups' },
  { id: 3, imageUrl: 'https://i.ibb.co/FJ6F9wd/offer3.jpg', text: 'Save More with Family Packages!' },
];

const quickActions = [
  { id: 1, icon: 'event-note', text: 'Book Appointment' },
  { id: 2, icon: 'file-copy', text: 'View Reports' },
  { id: 3, icon: 'local-pharmacy', text: 'Order Medicines' },
  { id: 4, icon: 'info', text: 'Help & Support' },
];

const popularServices = [
  { id: 1, text: 'Cardiology', icon: 'favorite' },
  { id: 2, text: 'Neurology', icon: 'psychology' },
  { id: 3, text: 'Paediatrics', icon: 'child-care' },
  { id: 4, text: 'Oncology', icon: 'healing' },
  { id: 5, text: 'Dermatology', icon: 'spa' },
];

export default function DashboardScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Title style={styles.title}>Welcome Back!</Title>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="account-circle" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Ongoing Offers */}
      <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Ongoing Offers</Title>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {banners.map((banner) => (
            <Card key={banner.id} style={styles.bannerCard}>
              <Image source={{ uri: banner.imageUrl }} style={styles.bannerImage} />
              <View style={styles.bannerTextWrapper}>
                <Text style={styles.bannerText}>{banner.text}</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>

      {/* Quick Access */}
      <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Quick Access</Title>
        <View style={styles.gridContainer}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.gridItem}>
              <View style={styles.iconWrapper}>
                <MaterialIcons name={action.icon} size={30} color="#005a9c" />
              </View>
              <Text style={styles.gridText}>{action.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Recently Viewed Services */}
      <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Recently Viewed</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <MaterialIcons name={service.icon} size={30} color="#005a9c" />
              <Text style={styles.serviceText}>{service.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Upcoming Appointments */}
      <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Upcoming Appointments</Title>
        <Card style={styles.appointmentCard}>
          <Card.Content>
            <Title style={styles.appointmentTitle}>Neurology Consultation</Title>
            <Paragraph>Date: 12 Dec 2024</Paragraph>
            <Paragraph>Time: 3:30 PM</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.appointmentCard}>
          <Card.Content>
            <Title style={styles.appointmentTitle}>Paediatrics Check-up</Title>
            <Paragraph>Date: 15 Dec 2024</Paragraph>
            <Paragraph>Time: 10:00 AM</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7F8FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bannerCard: {
    width: screenWidth - 40,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerTextWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bannerText: {
    color: '#FFF',
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridText: {
    fontSize: 14,
    textAlign: 'center',
  },
  serviceCard: {
    width: 100,
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  appointmentCard: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    elevation: 3,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
