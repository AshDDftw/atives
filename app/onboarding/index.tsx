import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function OnboardingWelcome() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <ThemedText style={styles.logoText}>A</ThemedText>
          </View>
          <ThemedText style={styles.brandName}>Atives</ThemedText>
        </View>
        
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>
            Welcome to the Creative Community
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: isDark ? '#888' : '#666' }]}>
            Connect with fellow creatives, showcase your work, and discover amazing opportunities
          </ThemedText>
        </View>
        
        <View style={styles.features}>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <ThemedText style={styles.featureEmoji}>🎨</ThemedText>
            </View>
            <ThemedText style={styles.featureText}>Showcase your portfolio</ThemedText>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <ThemedText style={styles.featureEmoji}>💼</ThemedText>
            </View>
            <ThemedText style={styles.featureText}>Find creative jobs</ThemedText>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <ThemedText style={styles.featureEmoji}>🤝</ThemedText>
            </View>
            <ThemedText style={styles.featureText}>Connect with creators</ThemedText>
          </View>
        </View>
        
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/onboarding/step1')}
          >
            <ThemedText style={styles.primaryButtonText}>Get Started</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => router.replace('/(tabs)')}
          >
            <ThemedText style={[styles.secondaryButtonText, { color: isDark ? '#888' : '#666' }]}>
              Skip for now
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  brandName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    marginBottom: 48,
    gap: 24,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttons: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
  },
});