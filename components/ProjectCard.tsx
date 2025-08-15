import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Project } from '../types';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
      <Image source={{ uri: project.images[0] }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          {project.title}
        </Text>
        
        <Text style={[styles.description, { color: isDark ? '#ccc' : '#666' }]} numberOfLines={2}>
          {project.description}
        </Text>
        
        <View style={styles.tags}>
          {project.tags.slice(0, 2).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
          {project.tags.length > 2 && (
            <Text style={[styles.moreTags, { color: isDark ? '#888' : '#666' }]}>
              +{project.tags.length - 2}
            </Text>
          )}
        </View>
        
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Ionicons name="heart-outline" size={16} color={isDark ? '#888' : '#666'} />
            <Text style={[styles.statText, { color: isDark ? '#888' : '#666' }]}>
              {project.likes}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="eye-outline" size={16} color={isDark ? '#888' : '#666'} />
            <Text style={[styles.statText, { color: isDark ? '#888' : '#666' }]}>
              {project.views}
            </Text>
          </View>
        </View>
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
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#007AFF20',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },
  tagText: {
    color: '#007AFF',
    fontSize: 11,
    fontWeight: '500',
  },
  moreTags: {
    fontSize: 11,
    alignSelf: 'center',
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
  },
});