import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import UserCard from '@/components/UserCard';
import { mockUsers } from '@/data/mockData';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('creators');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const tabs = [
    { key: 'creators', label: 'Creators', icon: 'people-outline' },
    { key: 'portfolios', label: 'Portfolios', icon: 'folder-outline' },
    { key: 'resources', label: 'Resources', icon: 'library-outline' },
  ];

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderContent = () => {
    switch (selectedTab) {
      case 'creators':
        return (
          <View>
            <ThemedText style={[styles.sectionTitle, { color: isDark ? '#888' : '#666' }]}>
              Discover talented creators
            </ThemedText>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </View>
        );
      case 'portfolios':
        return (
          <View style={styles.comingSoon}>
            <Ionicons name="folder-outline" size={48} color={isDark ? '#666' : '#ccc'} />
            <ThemedText style={[styles.comingSoonText, { color: isDark ? '#666' : '#999' }]}>
              Portfolio discovery coming soon
            </ThemedText>
          </View>
        );
      case 'resources':
        return (
          <View style={styles.comingSoon}>
            <Ionicons name="library-outline" size={48} color={isDark ? '#666' : '#ccc'} />
            <ThemedText style={[styles.comingSoonText, { color: isDark ? '#666' : '#999' }]}>
              Resource library coming soon
            </ThemedText>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Explore
        </ThemedText>
        
        <View style={[styles.searchContainer, { backgroundColor: isDark ? '#333' : '#f5f5f5' }]}>
          <Ionicons name="search" size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            style={[styles.searchInput, { color: isDark ? '#fff' : '#000' }]}
            placeholder="Search creators, skills..."
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tabButton,
                selectedTab === tab.key && styles.activeTab
              ]}
              onPress={() => setSelectedTab(tab.key)}
            >
              <Ionicons 
                name={tab.icon as any} 
                size={20} 
                color={selectedTab === tab.key ? '#007AFF' : (isDark ? '#888' : '#666')} 
              />
              <ThemedText style={[
                styles.tabText,
                selectedTab === tab.key && styles.activeTabText
              ]}>
                {tab.label}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.content}>
          {renderContent()}
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
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    gap: 6,
  },
  activeTab: {
    backgroundColor: '#007AFF20',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007AFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  comingSoon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    gap: 16,
  },
  comingSoonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});