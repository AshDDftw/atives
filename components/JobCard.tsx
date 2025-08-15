import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Job } from '../types';
import { useColorScheme } from '@/hooks/useColorScheme';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return '#4CAF50';
      case 'part-time': return '#FF9800';
      case 'contract': return '#2196F3';
      case 'freelance': return '#9C27B0';
      default: return '#666';
    }
  };

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          {job.title}
        </Text>
        <View style={[styles.typeTag, { backgroundColor: getTypeColor(job.type) + '20' }]}>
          <Text style={[styles.typeText, { color: getTypeColor(job.type) }]}>
            {job.type}
          </Text>
        </View>
      </View>
      
      <Text style={[styles.company, { color: isDark ? '#888' : '#666' }]}>
        {job.company}
      </Text>
      
      <View style={styles.locationRow}>
        <Ionicons 
          name={job.isRemote ? 'globe-outline' : 'location-outline'} 
          size={16} 
          color={isDark ? '#888' : '#666'} 
        />
        <Text style={[styles.location, { color: isDark ? '#888' : '#666' }]}>
          {job.location}
        </Text>
        {job.isRemote && (
          <View style={styles.remoteBadge}>
            <Text style={styles.remoteText}>Remote</Text>
          </View>
        )}
      </View>
      
      <Text style={[styles.description, { color: isDark ? '#ccc' : '#333' }]} numberOfLines={2}>
        {job.description}
      </Text>
      
      <View style={styles.skills}>
        {job.skills.slice(0, 3).map((skill, index) => (
          <View key={index} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
        {job.skills.length > 3 && (
          <Text style={[styles.moreSkills, { color: isDark ? '#888' : '#666' }]}>
            +{job.skills.length - 3} more
          </Text>
        )}
      </View>
      
      <View style={styles.footer}>
        <Text style={[styles.budget, { color: isDark ? '#fff' : '#000' }]}>
          {job.budget}
        </Text>
        <Text style={[styles.posted, { color: isDark ? '#888' : '#666' }]}>
          {new Date(job.postedAt).toLocaleDateString()}
        </Text>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  company: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 4,
  },
  location: {
    fontSize: 14,
  },
  remoteBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginLeft: 8,
  },
  remoteText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budget: {
    fontSize: 16,
    fontWeight: '600',
  },
  posted: {
    fontSize: 12,
  },
});