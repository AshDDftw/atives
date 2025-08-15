import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../types';
import { useColorScheme } from '@/hooks/useColorScheme';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      
      <View style={styles.userInfo}>
        <View style={styles.nameRow}>
          <Text style={[styles.name, { color: isDark ? '#fff' : '#000' }]}>
            {user.name}
          </Text>
          {user.isVerified && (
            <Ionicons name="checkmark-circle" size={16} color="#007AFF" />
          )}
        </View>
        
        <Text style={[styles.username, { color: isDark ? '#888' : '#666' }]}>
          @{user.username}
        </Text>
        
        <Text style={[styles.bio, { color: isDark ? '#ccc' : '#333' }]} numberOfLines={2}>
          {user.bio}
        </Text>
        
        <View style={styles.location}>
          <Ionicons name="location-outline" size={14} color={isDark ? '#888' : '#666'} />
          <Text style={[styles.locationText, { color: isDark ? '#888' : '#666' }]}>
            {user.location}
          </Text>
        </View>
        
        <View style={styles.skills}>
          {user.skills.slice(0, 2).map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
          {user.skills.length > 2 && (
            <Text style={[styles.moreSkills, { color: isDark ? '#888' : '#666' }]}>
              +{user.skills.length - 2}
            </Text>
          )}
        </View>
        
        <View style={styles.stats}>
          <Text style={[styles.statText, { color: isDark ? '#888' : '#666' }]}>
            {user.followers} followers
          </Text>
          <Text style={[styles.statText, { color: isDark ? '#888' : '#666' }]}>
            {user.following} following
          </Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 12,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 18,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
  },
  locationText: {
    fontSize: 12,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 12,
  },
  skillTag: {
    backgroundColor: '#007AFF20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  skillText: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '500',
  },
  moreSkills: {
    fontSize: 12,
    alignSelf: 'center',
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  statText: {
    fontSize: 12,
  },
  followButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'center',
  },
  followText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});