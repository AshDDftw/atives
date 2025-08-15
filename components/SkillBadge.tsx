import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SkillBadgeProps {
  skill: string;
  level: 'beginner' | 'intermediate' | 'expert';
  verified?: boolean;
}

export default function SkillBadge({ skill, level, verified = false }: SkillBadgeProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner': return '#4CAF50';
      case 'intermediate': return '#FF9800';
      case 'expert': return '#9C27B0';
      default: return '#666';
    }
  };

  return (
    <View style={[styles.container, { borderColor: getLevelColor() }]}>
      <Text style={[styles.skill, { color: getLevelColor() }]}>{skill}</Text>
      {verified && (
        <Ionicons name="checkmark-circle" size={14} color="#007AFF" />
      )}
      <View style={[styles.levelDot, { backgroundColor: getLevelColor() }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    gap: 4,
  },
  skill: {
    fontSize: 12,
    fontWeight: '500',
  },
  levelDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});