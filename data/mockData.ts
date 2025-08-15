import { User, Post, Job, Project } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'alices_wonderland',
    name: 'Alice Anshu Philip',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    bio: '2D Digital Painter creating magical worlds through art',
    followers: 250,
    following: 180,
    isVerified: true,
    skills: ['Digital Painting', '2D Art', 'Illustration', 'Character Design'],
    location: 'Prayagraj, India'
  },
  {
    id: '2',
    username: 'nishantartstudio',
    name: 'Nishant Gattani',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Mixed Media Artist exploring traditional and contemporary techniques',
    followers: 5000,
    following: 320,
    isVerified: true,
    skills: ['Mixed Media', 'Traditional Art', 'Contemporary Art', 'Painting'],
    location: 'Jodhpur, India'
  },
  {
    id: '3',
    username: 'marg_atreya',
    name: 'Sasikanth R Prabhu',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    bio: 'Business Growth Catalyst & Facilitator helping creatives succeed',
    followers: 1200,
    following: 150,
    isVerified: true,
    skills: ['Business Growth', 'Consulting', 'Strategy', 'Mentoring'],
    location: 'Thuravur, India'
  },
  {
    id: '4',
    username: 'mr_unique_artist',
    name: 'Dhaval Khatri',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    bio: 'Oil Painter creating unique masterpieces with traditional techniques',
    followers: 100000,
    following: 500,
    isVerified: true,
    skills: ['Oil Painting', 'Traditional Art', 'Portrait', 'Landscape'],
    location: 'Ahmedabad, India'
  },
  {
    id: '5',
    username: 'richard_barman',
    name: 'Richard Barman',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    bio: 'Professional photographer capturing life\'s beautiful moments',
    followers: 101000,
    following: 800,
    isVerified: true,
    skills: ['Photography', 'Portrait Photography', 'Wedding Photography', 'Photo Editing'],
    location: 'Guwahati, India'
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    user: mockUsers[0],
    content: 'Just completed a new digital painting series "The Enchanted Garden". Each piece tells a story of magic and wonder. Swipe to see the complete collection! 🎨✨',
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'],
    likes: 324,
    comments: 28,
    shares: 15,
    timestamp: '2024-01-15T10:30:00Z',
    tags: ['Digital Painting', '2D Art', 'Fantasy Art', 'Illustration']
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    content: 'Experimenting with mixed media techniques - combining traditional watercolors with digital elements. The texture and depth achieved is incredible! What do you think of this fusion approach?',
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400'],
    likes: 189,
    comments: 42,
    shares: 23,
    timestamp: '2024-01-14T18:45:00Z',
    tags: ['Mixed Media', 'Watercolor', 'Digital Art', 'Contemporary']
  },
  {
    id: '3',
    userId: '4',
    user: mockUsers[3],
    content: 'Working on a large oil painting commission - a family portrait that captures three generations. The challenge is balancing individual personalities while maintaining harmony. Progress update! 🖼️',
    images: ['https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400'],
    likes: 456,
    comments: 67,
    shares: 34,
    timestamp: '2024-01-13T14:20:00Z',
    tags: ['Oil Painting', 'Portrait', 'Commission', 'Traditional Art']
  },
  {
    id: '4',
    userId: '5',
    user: mockUsers[4],
    content: 'Captured this stunning pre-wedding shoot in the hills of Assam. The golden hour light and natural backdrop created pure magic! 📸',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=400'],
    likes: 892,
    comments: 156,
    shares: 78,
    timestamp: '2024-01-12T16:15:00Z',
    tags: ['Photography', 'Wedding Photography', 'Portrait', 'Golden Hour']
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Digital Artist for Gaming Studio',
    company: 'Mumbai Game Studios',
    location: 'Mumbai, India',
    type: 'full-time',
    budget: '₹8L - ₹12L per annum',
    description: 'Looking for a talented digital artist to create character designs and environments for our upcoming mobile game. Experience with 2D art and game asset creation required.',
    skills: ['Digital Painting', '2D Art', 'Character Design', 'Game Assets'],
    postedAt: '2024-01-10T09:00:00Z',
    deadline: '2024-02-10T23:59:59Z',
    isRemote: false
  },
  {
    id: '2',
    title: 'Wedding Photographer',
    company: 'Eternal Moments Photography',
    location: 'Delhi, India',
    type: 'freelance',
    budget: '₹25,000 - ₹50,000 per event',
    description: 'Seeking experienced wedding photographer for destination weddings across India. Must have own equipment and portfolio of Indian wedding photography.',
    skills: ['Wedding Photography', 'Portrait Photography', 'Photo Editing', 'Candid Photography'],
    postedAt: '2024-01-12T15:30:00Z',
    deadline: '2024-01-25T23:59:59Z',
    isRemote: false
  },
  {
    id: '3',
    title: 'Oil Painting Commission',
    company: 'Art Collector Private',
    location: 'Bangalore, India',
    type: 'freelance',
    budget: '₹1L - ₹3L per painting',
    description: 'Private collector seeking skilled oil painter for custom portrait series. Traditional techniques preferred. 3-month timeline for completion of 5 paintings.',
    skills: ['Oil Painting', 'Portrait Painting', 'Traditional Art', 'Custom Art'],
    postedAt: '2024-01-08T11:15:00Z',
    deadline: '2024-01-30T23:59:59Z',
    isRemote: false
  },
  {
    id: '4',
    title: 'Brand Illustrator',
    company: 'Creative Agency Pune',
    location: 'Pune, India',
    type: 'contract',
    budget: '₹50,000 - ₹80,000 per month',
    description: 'Need a creative illustrator for brand campaigns and marketing materials. 6-month contract with potential for extension. Experience with brand illustration required.',
    skills: ['Illustration', 'Brand Design', 'Digital Art', 'Marketing Materials'],
    postedAt: '2024-01-05T14:20:00Z',
    deadline: '2024-02-05T23:59:59Z',
    isRemote: true
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    userId: '1',
    title: 'The Enchanted Garden Series',
    description: 'A collection of 10 digital paintings exploring magical realms and fantasy creatures',
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'],
    tags: ['Digital Painting', 'Fantasy Art', '2D Art', 'Series'],
    likes: 834,
    views: 4200,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    userId: '2',
    title: 'Mixed Media Portraits',
    description: 'Contemporary portrait series combining traditional and digital techniques',
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400'],
    tags: ['Mixed Media', 'Portrait', 'Contemporary Art', 'Traditional'],
    likes: 567,
    views: 2890,
    createdAt: '2023-12-15T00:00:00Z'
  },
  {
    id: '3',
    userId: '4',
    title: 'Heritage Oil Paintings',
    description: 'Series of oil paintings depicting Indian cultural heritage and traditions',
    images: ['https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400'],
    tags: ['Oil Painting', 'Heritage', 'Cultural Art', 'Traditional'],
    likes: 1267,
    views: 6750,
    createdAt: '2023-12-20T00:00:00Z'
  },
  {
    id: '4',
    userId: '5',
    title: 'Wedding Photography Portfolio',
    description: 'Curated collection of Indian wedding photography showcasing diverse traditions',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=400'],
    tags: ['Wedding Photography', 'Indian Weddings', 'Portrait', 'Cultural'],
    likes: 2156,
    views: 12400,
    createdAt: '2023-11-10T00:00:00Z'
  }
];