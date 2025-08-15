import React from 'react';
import { ScrollView, StyleSheet, RefreshControl, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import PostCard from '@/components/PostCard';
import StoryViewer from '@/components/StoryViewer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { mockPosts } from '@/data/mockData';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const colorScheme = useColorScheme();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const handleCreatePost = () => {
    Alert.alert('Create Post', 'Post creation feature coming soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Atives
        </ThemedText>
      </ThemedView>
      
      <StoryViewer />
      
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          {mockPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </ThemedView>
      </ScrollView>
      
      <FloatingActionButton onPress={handleCreatePost} />
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
  content: {
    paddingVertical: 8,
  },
});