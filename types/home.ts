export interface FeatureItem {
  id: string;
  icon: 'diamond-ring' | 'gem' | 'gold-bars';
  title: string;
  description: string;
}

export interface FAQCategory {
  id: string;
  name: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  date: string;
  location: string;
  rating: number;
  quote: string;
  verified: boolean;
}
