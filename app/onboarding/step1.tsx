import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

const creativeFields = [
  { id: 'painting', label: 'Painting', icon: 'brush-outline' },
  { id: 'photography', label: 'Photography', icon: 'camera-outline' },
  { id: 'digital-art', label: 'Digital Art', icon: 'tablet-portrait-outline' },
  { id: 'illustration', label: 'Illustration', icon: 'color-palette-outline' },
  { id: 'sculpture', label: 'Sculpture', icon: 'cube-outline' },
  { id: 'crafts', label: 'Crafts & Handmade', icon: 'hand-left-outline' },
  { id: 'design', label: 'Graphic Design', icon: 'shapes-outline' },
  { id: 'writing', label: 'Writing', icon: 'create-outline' },
  { id: 'music', label: 'Music', icon: 'musical-notes-outline' },
  { id: 'dance', label: 'Dance', icon: 'body-outline' },
  { id: 'comedy', label: 'Comedy', icon: 'happy-outline' },
  { id: 'artisan', label: 'Artisan Work', icon: 'hammer-outline' },
];

export default function OnboardingStep1() {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [customField, setCustomField] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleField = (fieldId: string) => {
    setSelectedFields(prev => 
      prev.includes(fieldId) 
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const addCustomField = () => {
    if (customField.trim() && !selectedFields.includes(customField.trim())) {
      setSelectedFields(prev => [...prev, customField.trim()]);
      setCustomField('');
    }
  };

  const canContinue = selectedFields.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <ThemedText style={[styles.stepText, { color: isDark ? '#888' : '#666' }]}>
          Step 1 of 2
        </ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>
            What's your creative field?
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: isDark ? '#888' : '#666' }]}>
            Select all that apply to help us personalize your Atives experience
          </ThemedText>
        </ThemedView>
        
        <View style={styles.fieldsGrid}>
          {creativeFields.map((field) => (
            <TouchableOpacity
              key={field.id}
              style={[
                styles.fieldButton,
                { backgroundColor: isDark ? '#1a1a1a' : '#fff' },
                selectedFields.includes(field.id) && styles.selectedField
              ]}
              onPress={() => toggleField(field.id)}
            >
              <Ionicons 
                name={field.icon as any} 
                size={24} 
                color={selectedFields.includes(field.id) ? '#007AFF' : (isDark ? '#888' : '#666')} 
              />
              <ThemedText style={[
                styles.fieldText,
                selectedFields.includes(field.id) && styles.selectedFieldText
              ]}>
                {field.label}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.customFieldContainer}>
          <ThemedText style={[styles.customFieldLabel, { color: isDark ? '#888' : '#666' }]}>
            Don't see your field? Add it:
          </ThemedText>
          <View style={styles.customFieldInput}>
            <TextInput
              style={[styles.textInput, { color: isDark ? '#fff' : '#000' }]}
              placeholder="Enter your creative field"
              placeholderTextColor={isDark ? '#666' : '#999'}
              value={customField}
              onChangeText={setCustomField}
              onSubmitEditing={addCustomField}
            />
            <TouchableOpacity 
              style={styles.addButton}
              onPress={addCustomField}
              disabled={!customField.trim()}
            >
              <Ionicons name="add" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>
        
        {selectedFields.length > 0 && (
          <View style={styles.selectedContainer}>
            <ThemedText style={[styles.selectedLabel, { color: isDark ? '#888' : '#666' }]}>
              Selected fields:
            </ThemedText>
            <View style={styles.selectedTags}>
              {selectedFields.map((field, index) => (
                <View key={index} style={styles.selectedTag}>
                  <ThemedText style={styles.selectedTagText}>{field}</ThemedText>
                  <TouchableOpacity onPress={() => toggleField(field)}>
                    <Ionicons name="close" size={16} color="#007AFF" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      
      <ThemedView style={styles.footer}>
        <TouchableOpacity 
          style={[styles.continueButton, !canContinue && styles.disabledButton]}
          onPress={() => canContinue && router.push('/onboarding/step2')}
          disabled={!canContinue}
        >
          <ThemedText style={[
            styles.continueButtonText,
            !canContinue && styles.disabledButtonText
          ]}>
            Continue
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
  fieldsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  fieldButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 8,
    minWidth: '45%',
  },
  selectedField: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF10',
  },
  fieldText: {
    fontSize: 14,
    fontWeight: '500',
  },
  selectedFieldText: {
    color: '#007AFF',
  },
  customFieldContainer: {
    marginBottom: 32,
  },
  customFieldLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  customFieldInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  addButton: {
    padding: 4,
  },
  selectedContainer: {
    marginBottom: 32,
  },
  selectedLabel: {
    fontSize: 14,
    marginBottom: 12,
  },
  selectedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  selectedTagText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#999',
  },
});