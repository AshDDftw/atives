import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import AchievementBadge from '@/components/AchievementBadge';
import VideoThumbnail from '@/components/VideoThumbnail';
import { mockUsers, mockPosts, mockProjects } from '@/data/mockData';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState('posts');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const currentUser = mockUsers[0]; // Using first user as current user
  const userPosts = mockPosts.filter(post => post.userId === currentUser.id);
  const userProjects = mockProjects.filter(project => project.userId === currentUser.id);

  const tabs = [
    { key: 'posts', label: 'Posts', count: userPosts.length },
    { key: 'projects', label: 'Projects', count: userProjects.length },
    { key: 'reels', label: 'Reels', count: 5 },
    { key: 'achievements', label: 'Achievements', count: 8 },
    { key: 'saved', label: 'Saved', count: 12 },
  ];

  const achievements = [
    { title: 'First Post', description: 'Share your first creation', icon: 'create', rarity: 'common' as const, unlocked: true },
    { title: 'Rising Star', description: 'Get 100 likes on a post', icon: 'star', rarity: 'rare' as const, unlocked: true },
    { title: 'Collaboration Master', description: 'Complete 5 collaborations', icon: 'people', rarity: 'epic' as const, unlocked: false },
    { title: 'Art Legend', description: 'Reach 10k followers', icon: 'trophy', rarity: 'legendary' as const, unlocked: false },
  ];

  const userReels = [
    { id: '1', thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200', duration: '0:45', title: 'Digital Painting Process', views: 1247 },
    { id: '2', thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200', duration: '1:20', title: 'Watercolor Techniques', views: 892 },
    { id: '3', thumbnail: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200', duration: '0:30', title: 'Speed Painting', views: 567 },
    { id: '4', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200', duration: '2:15', title: 'Art Tutorial', views: 1089 },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'posts':
        return (
          <View>
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </View>
        );
      case 'projects':
        return (
          <View style={styles.projectsGrid}>
            {userProjects.map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <ProjectCard project={project} />
              </View>
            ))}
          </View>
        );
      case 'achievements':
        return (
          <View style={styles.achievementsContainer}>
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </View>
        );
      case 'reels':
        return (
          <View style={styles.reelsGrid}>
            {userReels.map((reel) => (
              <VideoThumbnail
                key={reel.id}
                {...reel}
                onPress={() => Alert.alert('Open Reel', `Opening ${reel.title}`)}
              />
            ))}
          </View>
        );
      case 'saved':
        return (
          <View style={styles.comingSoon}>
            <Ionicons name="bookmark-outline" size={48} color={isDark ? '#666' : '#ccc'} />
            <ThemedText style={[styles.comingSoonText, { color: isDark ? '#666' : '#999' }]}>
              Saved items coming soon
            </ThemedText>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.header}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
            
            <View style={styles.userInfo}>
              <View style={styles.nameRow}>
                <ThemedText style={styles.name}>{currentUser.name}</ThemedText>
                {currentUser.isVerified && (
                  <Ionicons name="checkmark-circle" size={20} color="#007AFF" />
                )}
              </View>
              <ThemedText style={[styles.username, { color: isDark ? '#888' : '#666' }]}>
                @{currentUser.username}
              </ThemedText>
            </View>
            
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
          
          <ThemedText style={[styles.bio, { color: isDark ? '#ccc' : '#333' }]}>
            {currentUser.bio}
          </ThemedText>
          
          <View style={styles.location}>
            <Ionicons name="location-outline" size={16} color={isDark ? '#888' : '#666'} />
            <ThemedText style={[styles.locationText, { color: isDark ? '#888' : '#666' }]}>
              {currentUser.location}
            </ThemedText>
          </View>
          
          <View style={styles.skills}>
            {currentUser.skills.map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <ThemedText style={styles.skillText}>{skill}</ThemedText>
              </View>
            ))}
          </View>
          
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <ThemedText style={styles.statNumber}>{currentUser.followers}</ThemedText>
              <ThemedText style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>
                Followers
              </ThemedText>
            </View>
            <View style={styles.statItem}>
              <ThemedText style={styles.statNumber}>{currentUser.following}</ThemedText>
              <ThemedText style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>
                Following
              </ThemedText>
            </View>
            <View style={styles.statItem}>
              <ThemedText style={styles.statNumber}>24</ThemedText>
              <ThemedText style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>
                Projects
              </ThemedText>
            </View>
          </View>
        </ThemedView>
        
        <ThemedView style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tabButton,
                selectedTab === tab.key && styles.activeTab
              ]}
              onPress={() => setSelectedTab(tab.key)}
            >
              <ThemedText style={[
                styles.tabText,
                selectedTab === tab.key && styles.activeTabText
              ]}>
                {tab.label}
              </ThemedText>
              <ThemedText style={[
                styles.tabCount,
                selectedTab === tab.key && styles.activeTabText
              ]}>
                {tab.count}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
        
        <ThemedView style={styles.content}>
          {renderTabContent()}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
  },
  editButton: {
    padding: 8,
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  skillTag: {
    backgroundColor: '#007AFF20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 6,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007AFF',
  },
  tabCount: {
    fontSize: 14,
    fontWeight: '400',
  },
  content: {
    paddingVertical: 16,
  },
  projectsGrid: {
    paddingHorizontal: 16,
  },
  projectItem: {
    marginBottom: 16,
  },
  comingSoon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    gap: 16,
  },
  comingSoonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  achievementsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  reelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});