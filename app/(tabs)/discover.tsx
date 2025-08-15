import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import LiveStreamCard from '@/components/LiveStreamCard';
import ChallengeCard from '@/components/ChallengeCard';
import { useColorScheme } from '@/hooks/useColorScheme';

const liveStreams = [
  {
    title: 'Oil Painting Portrait Session',
    artist: 'Dhaval Khatri',
    viewers: 234,
    thumbnail: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
  },
  {
    title: 'Digital Art Speed Paint',
    artist: 'Alice Philip',
    viewers: 156,
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
  },
  {
    title: 'Wedding Photography Tips',
    artist: 'Richard Barman',
    viewers: 89,
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200'
  }
];

const challenges = [
  {
    title: 'Monsoon Art Challenge',
    description: 'Create artwork inspired by the Indian monsoon season. Any medium welcome!',
    prize: '₹50,000',
    participants: 1247,
    daysLeft: 12,
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400'
  },
  {
    title: 'Heritage Portrait Series',
    description: 'Paint or photograph Indian cultural heritage and traditions',
    prize: '₹25,000',
    participants: 856,
    daysLeft: 8,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400'
  }
];

export default function DiscoverScreen() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Discover
        </ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Live Creative Sessions</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {liveStreams.map((stream, index) => (
              <LiveStreamCard key={index} {...stream} />
            ))}
          </ScrollView>
        </ThemedView>
        
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Creative Challenges</ThemedText>
          <View style={styles.challengesContainer}>
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </View>
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
  horizontalScroll: {
    paddingLeft: 16,
  },
  challengesContainer: {
    paddingHorizontal: 16,
  },
});