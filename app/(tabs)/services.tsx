import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const manageOptions = [
  { id: 1, title: 'General Consultation', icon: 'local-hospital' },
  { id: 2, title: 'Specialist', icon: 'medical-services' },
  { id: 3, title: 'Telehealth and Diagnostic Services', icon: 'videocam' },
  {id:4, title: 'Diagnostic Services'}
];

const services = [
  "Cardiology",
  "Clinical Genetics",
  "Clinical Immunology",
  "Dermatology",
  "Endocrinology",
  "General Medicine",
  "Gerontology",
  "Haematology",
  "Hospital-in-the-Home",
  "Infectious Disease",
  "Maternity",
  "Nephrology",
  "Neurology",
  "Neuropsychology",
  "Oncology",
  "Paediatrics",
  "Radiation",
  "Rehabilitation",
  "Respiratory Medicine",
  "Rheumatology",
  "Sleep Centre",
];

const subServices = {
  Cardiology: [
    { title: "ECG", description: "Electrocardiogram for heart monitoring", price: "$50" },
    { title: "Stress Test", description: "Heart stress testing", price: "$100" },
  ],
  Dermatology: [
    { title: "Skin Check", description: "Comprehensive skin analysis", price: "$80" },
    { title: "Mole Removal", description: "Safe and effective mole removal", price: "$120" },
  ],
};

const topDoctors = [
  "Cardiologists",
  "Dermatologists",
  "Endocrinologists",
  "Neurologists",
  "Pediatricians",
  "Oncologists",
];

const telehealthDescription = {
  title: "Telehealth Services",
  description: "Get medical advice from the comfort of your home through our telehealth services.",
  callToAction: "Start a Telehealth Session",
};

const diagnosticDescription = {
  title: "Diagnostic Services",
  description: "Comprehensive diagnostic services including lab tests, imaging, and more.",
  callToAction: "Raise Your Request / View Diagnostic Services",
};

export default function ServicesPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    setExpandedService((prevService) => (prevService === service ? null : service));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Manage Options</Text>
      <View style={styles.gridContainer}>
        {manageOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.gridCard}
            onPress={() => setSelectedOption(option.id)}
          >
            <Text style={styles.gridCardText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedOption === 1 && (
      <View>
      <Text style={styles.sectionTitle}>Services</Text>
      {services.map((service) => (
        <View key={service}>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => toggleService(service)}
          >
            <Text style={styles.serviceText}>{service}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>

              {expandedService === service && subServices[service] && (
                <View style={styles.subServiceContainer}>
                  {subServices[service].map((subService, index) => (
                    <Card key={index} style={styles.subServiceCard}>
                      <Text style={styles.subServiceTitle}>{subService.title}</Text>
                      <Text style={styles.subServiceDescription}>{subService.description}</Text>
                      <View style={styles.priceBar}>
                        <Text style={styles.priceText}>{subService.price}</Text>
                      </View>
                    </Card>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {selectedOption === 2 && (
        <View>
          <Text style={styles.sectionTitle}>Top Doctors</Text>
          {topDoctors.map((doctor) => (
            <TouchableOpacity key={doctor} style={styles.serviceItem}>
              <Text style={styles.serviceText}>{doctor}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selectedOption === 3 && (
        <View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{telehealthDescription.title}</Text>
            <Text style={styles.descriptionText}>{telehealthDescription.description}</Text>
            <TouchableOpacity style={styles.callToActionButton}>
              <Text style={styles.callToActionText}>{telehealthDescription.callToAction}</Text>
            </TouchableOpacity>
          </View>
        
        </View>
      )}

{selectedOption === 4 && (
        <View>
        
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{diagnosticDescription.title}</Text>
            <Text style={styles.descriptionText}>{diagnosticDescription.description}</Text>
            <TouchableOpacity style={styles.callToActionButton}>
              <Text style={styles.callToActionText}>{diagnosticDescription.callToAction}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F8FA",
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  gridCard: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 15,
  },
  gridCardText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  serviceText: {
    fontSize: 16,
  },
  subServiceContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  subServiceCard: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 2,
  },
  subServiceTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subServiceDescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  priceBar: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    alignItems: "center",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
  },
  descriptionContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 2,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  callToActionButton: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  callToActionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});
