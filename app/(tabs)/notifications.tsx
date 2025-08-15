import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import CollaborationRequest from '@/components/CollaborationRequest';

const collaborationRequests = [
  {
    requester: {
      name: 'Nishant Gattani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      skills: ['Mixed Media', 'Traditional Art']
    },
    project: 'Heritage Art Exhibition',
    message: 'Hi! I love your digital art style. Would you like to collaborate on a mixed heritage art exhibition combining traditional and digital techniques?'
  },
  {
    requester: {
      name: 'Richard Barman',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      skills: ['Photography', 'Visual Storytelling']
    },
    project: 'Creative Documentary',
    message: 'I\'m working on a documentary about Indian artists. Your work would be perfect for the visual narrative. Interested in collaborating?'
  }
];

export default function NotificationsScreen() {
  const handleAccept = (project: string) => {
    Alert.alert('Collaboration Accepted', `You've accepted the collaboration for "${project}"`);
  };

  const handleDecline = (project: string) => {
    Alert.alert('Collaboration Declined', `You've declined the collaboration for "${project}"`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Notifications
        </ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Collaboration Requests</ThemedText>
          {collaborationRequests.map((request, index) => (
            <CollaborationRequest
              key={index}
              {...request}
              onAccept={() => handleAccept(request.project)}
              onDecline={() => handleDecline(request.project)}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 16,
  },
});