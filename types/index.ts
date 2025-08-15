export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  isVerified: boolean;
  skills: string[];
  location: string;
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  budget: string;
  description: string;
  skills: string[];
  postedAt: string;
  deadline: string;
  isRemote: boolean;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  likes: number;
  views: number;
  createdAt: string;
}