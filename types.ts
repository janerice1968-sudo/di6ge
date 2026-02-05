
export interface Model {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  isLive: boolean;
  category: string;
  viewers?: number;
}

export interface Testimonial {
  id: string;
  user: string;
  role: string;
  content: string;
  avatar: string;
}
