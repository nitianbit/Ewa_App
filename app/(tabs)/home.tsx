import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  Easing,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // For navigation

const { width: screenWidth } = Dimensions.get('window');

const services = [
  { id: 1, src: 'https://i.ibb.co/Z2sDJ7M/english-teacher-doing-her-lessons-online.jpg', text: 'Online Consultation' },
  { id: 2, src: 'https://i.ibb.co/rdnRXFt/gynecologist-evaluating-pregnancy-with-patient.jpg', text: 'OPD/Clinical Appointment' },
  { id: 3, src: 'https://i.ibb.co/89hswTM/close-up-laboratory-desk-with-professional-research-equipment-tray-vacutainers-with-blood-microscopi.jpg', text: 'Book Lab Tests' },
  { id: 4, src: 'https://i.ibb.co/7JZwFdq/450079-PEZQXQ-805.jpg', text: 'Emergency Ambulance' },
];

const carouselItems = [
  { id: 1, imageUrl: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg', text: 'Your Health, Our Priority' },
  { id: 2, imageUrl: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg', text: 'Comprehensive Care for All' },
  { id: 3, imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg', text: 'Stay Fit, Stay Healthy' },
];

const healthTips = [
  'Drink at least 8 glasses of water daily.',
  'Exercise for 30 minutes every day.',
  'Get regular health checkups.',
  'Eat a balanced diet rich in fruits and vegetables.',
  'Practice mindfulness and reduce stress.',
];

export default function HomeScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
    scrollX.setValue(event.nativeEvent.contentOffset.x);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
  

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.carouselScrollView}
        >
          {carouselItems.map((item) => (
            <Card key={item.id} style={styles.carouselCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.carouselImage} />
              <Text style={styles.carouselText}>{item.text}</Text>
            </Card>
          ))}
        </ScrollView>

        {/* Pagination */}
        <View style={styles.pagination}>
          {carouselItems.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: index === activeIndex ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Services */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        
      </View>
      <View style={styles.serviceContainer}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <Animated.View
              style={
                service.text === 'Emergency Ambulance'
                  ? { transform: [{ scale: pulseAnim }] }
                  : {}
              }
            >
              <Image source={{ uri: service.src }} style={styles.serviceImage} />
            </Animated.View>
            <Text style={styles.serviceText}>{service.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Health Tips */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Health Tips</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tipsContainer}>
        {healthTips.map((tip, index) => (
          <Card key={index} style={styles.tipCard}>
            <Text style={styles.tipText}>{tip}</Text>
          </Card>
        ))}
      </ScrollView>

      {/* Testimonials */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>What People Say</Text>
      </View>
      <Card style={styles.testimonialCard}>
        <Text style={styles.testimonialText}>
          "This app has been a game-changer for managing my health. Highly recommended!"
        </Text>
        <Text style={styles.testimonialAuthor}>- Jane Doe</Text>
      </Card>

      {/* Call-to-Action */}
      <Card style={styles.ctaCard}>
        <Card.Content>
          <Title style={styles.ctaTitle}>Take Charge of Your Health Today</Title>
          <Button mode="contained" onPress={() => {}} style={styles.ctaButton}>
            Get Started
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: '#F7F8FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselScrollView: {
    flexDirection: 'row',
  },
  carouselCard: {
    width: screenWidth - 40,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    elevation: 3,
  },
  carouselImage: {
    width: '100%',
    height: 150,
  },
  carouselText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#005a9c',
    marginHorizontal: 5,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  serviceCard: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  tipsContainer: {
    marginBottom: 20,
  },
  tipCard: {
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 3,
  },
  tipText: {
    fontSize: 14,
  },
  testimonialCard: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 3,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'right',
  },
  ctaCard: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#005a9c',
  },
  ctaTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: '#FFA500',
  },
});
