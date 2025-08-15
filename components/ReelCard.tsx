import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface ReelCardProps {
  video: {
    id: string;
    uri: string;
    thumbnail: string;
    title: string;
    description: string;
    user: {
      name: string;
      avatar: string;
      username: string;
    };
    likes: number;
    comments: number;
    shares: number;
    price?: string;
    isForSale?: boolean;
  };
  isActive: boolean;
}

export default function ReelCard({ video, isActive }: ReelCardProps) {
  const [isPlaying, setIsPlaying] = useState(isActive);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<Video>(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const likeScale = useSharedValue(1);

  const handleLike = () => {
    setIsLiked(!isLiked);
    likeScale.value = withSpring(1.2, { damping: 10 }, () => {
      likeScale.value = withSpring(1);
    });
  };

  const likeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: likeScale.value }],
  }));

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.playAsync();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pauseAsync();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoContainer} onPress={togglePlayPause}>
        <Video
          ref={videoRef}
          source={{ uri: video.uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          shouldPlay={isActive}
          isLooping
          isMuted={false}
        />
        {!isPlaying && (
          <View style={styles.playButton}>
            <Ionicons name="play" size={40} color="#fff" />
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.leftContent}>
          <View style={styles.userInfo}>
            <Image source={{ uri: video.user.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.username}>@{video.user.username}</Text>
              <Text style={styles.name}>{video.user.name}</Text>
            </View>
          </View>
          
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.description}>{video.description}</Text>
          
          {video.isForSale && (
            <View style={styles.priceTag}>
              <Ionicons name="pricetag" size={16} color="#FFD700" />
              <Text style={styles.priceText}>{video.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.rightActions}>
          <Animated.View style={likeAnimatedStyle}>
            <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={28} 
                color={isLiked ? "#FF3B30" : "#fff"} 
              />
              <Text style={styles.actionText}>{video.likes + (isLiked ? 1 : 0)}</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={28} color="#fff" />
            <Text style={styles.actionText}>{video.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={28} color="#fff" />
            <Text style={styles.actionText}>{video.shares}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 100,
    position: 'relative',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 32,
  },
  leftContent: {
    flex: 1,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  name: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 12,
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  priceText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '600',
  },
  buyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  rightActions: {
    alignItems: 'center',
    gap: 20,
  },
  actionButton: {
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});