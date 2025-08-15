import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // In a real app, you would check if user has completed onboarding
    // For demo purposes, always redirect to onboarding
    router.replace('/onboarding');
  }, []);

  return null;
}