import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

const stories = [
  { id: '1', user: 'Alice', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60', hasStory: true },
  { id: '2', user: 'Nishant', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60', hasStory: true },
  { id: '3', user: 'Dhaval', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60', hasStory: true },
  { id: '4', user: 'Richard', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60', hasStory: true },
];

export default function StoryViewer() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {stories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyItem}>
            <View style={[styles.storyBorder, story.hasStory && styles.hasStoryBorder]}>
              <Image source={{ uri: story.avatar }} style={styles.avatar} />
            </View>
            <ThemedText style={styles.username}>{story.user}</ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    padding: 3,
    marginBottom: 4,
  },
  hasStoryBorder: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    fontSize: 12,
    textAlign: 'center',
  },
});