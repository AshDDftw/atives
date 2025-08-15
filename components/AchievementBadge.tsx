import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
}

export default function AchievementBadge({ title, description, icon, rarity, unlocked }: AchievementBadgeProps) {
  const scale = useSharedValue(unlocked ? 1 : 0.8);
  
  React.useEffect(() => {
    scale.value = withSpring(unlocked ? 1 : 0.8);
  }, [unlocked]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const getRarityColor = () => {
    switch (rarity) {
      case 'common': return '#4CAF50';
      case 'rare': return '#2196F3';
      case 'epic': return '#9C27B0';
      case 'legendary': return '#FFD700';
      default: return '#666';
    }
  };

  return (
    <Animated.View style={[
      styles.container,
      { 
        backgroundColor: unlocked ? getRarityColor() + '20' : '#f0f0f0',
        borderColor: unlocked ? getRarityColor() : '#ccc'
      },
      animatedStyle
    ]}>
      <View style={[styles.iconContainer, { backgroundColor: getRarityColor() }]}>
        <Ionicons 
          name={icon as any} 
          size={20} 
          color={unlocked ? '#fff' : '#999'} 
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: unlocked ? getRarityColor() : '#999' }]}>
          {title}
        </Text>
        <Text style={[styles.description, { color: unlocked ? '#666' : '#ccc' }]}>
          {description}
        </Text>
      </View>
      {!unlocked && (
        <View style={styles.lockOverlay}>
          <Ionicons name="lock-closed" size={16} color="#999" />
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 8,
    position: 'relative',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
  },
  lockOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});