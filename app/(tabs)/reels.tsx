import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReelCard from '@/components/ReelCard';
import CreateReelButton from '@/components/CreateReelButton';

const { height } = Dimensions.get('window');

const reelsData = [
  {
    id: '1',
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    title: 'Digital Painting Process',
    description: 'Watch me create this magical forest scene step by step! ✨ #DigitalArt #ProcessVideo',
    user: {
      name: 'Alice Anshu Philip',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      username: 'alices_wonderland'
    },
    likes: 1247,
    comments: 89,
    shares: 34,
    isForSale: true,
    price: '₹2,500'
  },
  {
    id: '2',
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400',
    title: 'Oil Painting Technique',
    description: 'Traditional oil painting techniques passed down through generations 🎨 #OilPainting #Traditional',
    user: {
      name: 'Dhaval Khatri',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      username: 'mr_unique_artist'
    },
    likes: 2156,
    comments: 156,
    shares: 78,
    isForSale: true,
    price: '₹15,000'
  },
  {
    id: '3',
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
    title: 'Wedding Photography BTS',
    description: 'Behind the scenes of a beautiful Indian wedding shoot 📸 #WeddingPhotography #BTS',
    user: {
      name: 'Richard Barman',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      username: 'richard_barman'
    },
    likes: 892,
    comments: 67,
    shares: 23,
    isForSale: false
  },
  {
    id: '4',
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400',
    title: 'Mixed Media Art',
    description: 'Combining watercolor with digital elements for unique textures 🌈 #MixedMedia #Contemporary',
    user: {
      name: 'Nishant Gattani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      username: 'nishantartstudio'
    },
    likes: 567,
    comments: 45,
    shares: 19,
    isForSale: true,
    price: '₹8,500'
  },
  {
    id: '5',
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    title: 'Sculpture Time-lapse',
    description: 'Creating a clay sculpture from start to finish in 60 seconds! 🏺 #Sculpture #Timelapse',
    user: {
      name: 'Artisan Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      username: 'artisan_kumar'
    },
    likes: 1089,
    comments: 78,
    shares: 41,
    isForSale: true,
    price: '₹12,000'
  }
];

export default function ReelsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <ReelCard video={item} isActive={index === currentIndex} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={reelsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 100}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => ({
          length: height - 100,
          offset: (height - 100) * index,
          index,
        })}
      />
      <CreateReelButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});