import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

const goals = [
  { id: 'showcase', label: 'Showcase my creations', icon: 'eye-outline' },
  { id: 'network', label: 'Connect with artists', icon: 'people-outline' },
  { id: 'jobs', label: 'Find creative work', icon: 'briefcase-outline' },
  { id: 'sell', label: 'Sell my artwork', icon: 'storefront-outline' },
  { id: 'learn', label: 'Learn new techniques', icon: 'school-outline' },
  { id: 'collaborate', label: 'Find collaborators', icon: 'handshake-outline' },
  { id: 'inspiration', label: 'Get inspired', icon: 'bulb-outline' },
  { id: 'commission', label: 'Get commissions', icon: 'card-outline' },
];

export default function OnboardingStep2() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [bio, setBio] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const canContinue = selectedGoals.length > 0;

  const handleComplete = () => {
    // In a real app, you would save the onboarding data here
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <ThemedText style={[styles.stepText, { color: isDark ? '#888' : '#666' }]}>
          Step 2 of 2
        </ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>
            What are your goals?
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: isDark ? '#888' : '#666' }]}>
            Help us understand what you want to achieve as a creative on Atives
          </ThemedText>
        </ThemedView>
        
        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.goalButton,
                { backgroundColor: isDark ? '#1a1a1a' : '#fff' },
                selectedGoals.includes(goal.id) && styles.selectedGoal
              ]}
              onPress={() => toggleGoal(goal.id)}
            >
              <Ionicons 
                name={goal.icon as any} 
                size={24} 
                color={selectedGoals.includes(goal.id) ? '#007AFF' : (isDark ? '#888' : '#666')} 
              />
              <ThemedText style={[
                styles.goalText,
                selectedGoals.includes(goal.id) && styles.selectedGoalText
              ]}>
                {goal.label}
              </ThemedText>
              {selectedGoals.includes(goal.id) && (
                <Ionicons name="checkmark-circle" size={20} color="#007AFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.bioContainer}>
          <ThemedText style={styles.bioLabel}>
            Tell us about yourself (optional)
          </ThemedText>
          <TextInput
            style={[
              styles.bioInput,
              { 
                backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                color: isDark ? '#fff' : '#000',
                borderColor: isDark ? '#333' : '#e0e0e0'
              }
            ]}
            placeholder="Share your creative journey, experience, or what makes you unique..."
            placeholderTextColor={isDark ? '#666' : '#999'}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <ThemedText style={[styles.charCount, { color: isDark ? '#666' : '#999' }]}>
            {bio.length}/200
          </ThemedText>
        </View>
      </ScrollView>
      
      <ThemedView style={styles.footer}>
        <TouchableOpacity 
          style={[styles.completeButton, !canContinue && styles.disabledButton]}
          onPress={handleComplete}
          disabled={!canContinue}
        >
          <ThemedText style={[
            styles.completeButtonText,
            !canContinue && styles.disabledButtonText
          ]}>
            Complete Setup
          </ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => router.replace('/(tabs)')}
        >
          <ThemedText style={[styles.skipButtonText, { color: isDark ? '#888' : '#666' }]}>
            Skip for now
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  stepText: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  textContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  goalsContainer: {
    gap: 12,
    marginBottom: 32,
  },
  goalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 12,
  },
  selectedGoal: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF10',
  },
  goalText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  selectedGoalText: {
    color: '#007AFF',
  },
  bioContainer: {
    marginBottom: 32,
  },
  bioLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  bioInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 100,
    marginBottom: 8,
  },
  charCount: {
    fontSize: 12,
    textAlign: 'right',
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  completeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#999',
  },
  skipButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
  },
});