
export interface Artist {
  id: string;
  name: string;
  englishName: string;
  members: string[];
  description: string;
  imageUrl: string;
  color: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  source: string;
  tags: string[];
  date: string;
  likes: number;
}

export interface CommunityPost {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
