import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ChallengeCardProps {
  title: string;
  description: string;
  prize: string;
  participants: number;
  daysLeft: number;
  image: string;
}

export default function ChallengeCard({ title, description, prize, participants, daysLeft, image }: ChallengeCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>{title}</Text>
          <View style={styles.prizeTag}>
            <Ionicons name="trophy" size={12} color="#FFD700" />
            <Text style={styles.prizeText}>{prize}</Text>
          </View>
        </View>
        <Text style={[styles.description, { color: isDark ? '#ccc' : '#666' }]} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="people" size={16} color={isDark ? '#888' : '#666'} />
            <Text style={[styles.statText, { color: isDark ? '#888' : '#666' }]}>
              {participants} joined
            </Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="time" size={16} color="#FF6B35" />
            <Text style={[styles.statText, { color: '#FF6B35' }]}>
              {daysLeft} days left
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Challenge</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  prizeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD70020',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  prizeText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});