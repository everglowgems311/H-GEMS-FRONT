import { FeatureItem, FAQCategory, FAQItem, ReviewItem } from '@/types/home';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'consultation',
    icon: 'diamond-ring',
    title: 'Individual Consultation',
    description: 'Personal styling and atelier bespoke advice for your unique dream piece.',
  },
  {
    id: 'authenticity',
    icon: 'gem',
    title: 'Ethical Gemstones & Diamonds',
    description: 'GIA & IGI certified diamonds and ethically sourced natural gemstones of the highest clarity.',
  },
  {
    id: 'craftsmanship',
    icon: 'gold-bars',
    title: 'Master Craftsmanship',
    description: 'Precision handcrafted using recycled 18k gold, 950 platinum, and flawless finishes.',
  },
];

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: 'general', name: 'General Questions' },
  { id: 'materials', name: 'Materials & Gold' },
  { id: 'care', name: 'Care & Cleaning' },
  { id: 'customization', name: 'Customization' },
  { id: 'shipping', name: 'Shipping & Delivery' },
];

export const FAQ_ITEMS: Record<string, FAQItem[]> = {
  general: [
    {
      question: 'How do I determine my correct ring size?',
      answer: 'We provide a complimentary luxury ring sizer kit upon request, or you can book an in-person or virtual consultation with our gemologists for precise measurement.',
    },
    {
      question: 'Are all gemstones and diamonds certified?',
      answer: 'Yes. Every diamond above 0.30 carats is accompanied by an independent grading certificate from GIA or IGI, along with our lifetime authenticity guarantee.',
    },
    {
      question: 'Do you offer international insured shipping?',
      answer: 'We offer fully insured worldwide express shipping with signature-required courier delivery to ensure your precious pieces arrive securely.',
    },
  ],
  materials: [
    {
      question: 'What gold purity and alloys do you use?',
      answer: 'We work exclusively with 18-karat solid yellow, white, and rose gold (750/1000 purity) and 950 Platinum for unmatched radiance, durability, and luxury weight.',
    },
    {
      question: 'Are your precious metals ethically sourced?',
      answer: 'We use 100% certified recycled precious metals and conflict-free Kimberly Process certified diamonds, ensuring sustainability and moral integrity.',
    },
  ],
  care: [
    {
      question: 'How should I clean and preserve fine jewelry at home?',
      answer: 'Use lukewarm water with a drop of mild pH-neutral soap and a soft-bristle brush. Gently rinse and dry with a microfiber cloth. We also offer complimentary lifetime ultrasonic cleaning at our atelier.',
    },
    {
      question: 'Can I wear my jewelry while swimming or showering?',
      answer: 'We recommend removing fine jewelry before entering chlorinated pools, hot tubs, or handling harsh household chemicals to maintain gemstone brilliance and metal finish.',
    },
  ],
  customization: [
    {
      question: 'Can I create a completely bespoke, custom-designed piece?',
      answer: 'Yes! Our bespoke atelier service allows you to collaborate directly with our master jewellers from initial 3D rendering and wax modeling to final gemstone setting.',
    },
    {
      question: 'How long does a bespoke creation take?',
      answer: 'A bespoke piece typically takes 3 to 5 weeks from design approval to final handcrafting and hallmarking.',
    },
  ],
  shipping: [
    {
      question: 'What is the standard delivery timeframe?',
      answer: 'Ready-to-wear pieces ship within 1-3 business days with express courier (2-4 business days). Custom or sized orders require 2-3 weeks.',
    },
    {
      question: 'Is my shipment fully insured during transit?',
      answer: 'Every shipment is 100% insured for its full value until it is safely received and signed for at your delivery address.',
    },
  ],
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Elena Von Berg',
    date: '2 weeks ago',
    location: 'Zurich, Switzerland',
    rating: 5,
    quote: 'The bespoke emerald necklace exceeded every expectation. The craftsmanship is pure haute joaillerie. Unmatched attention to detail.',
    verified: true,
  },
  {
    id: 2,
    name: 'Maximilian Sterling',
    date: '1 month ago',
    location: 'Vienna, Austria',
    rating: 5,
    quote: 'I commissioned an engagement ring. The personal consultation was discreet, warm, and the certified diamond radiates fire like nothing I have ever seen.',
    verified: true,
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    date: '3 weeks ago',
    location: 'Paris, France',
    rating: 5,
    quote: 'From packaging to the feel of solid 18k gold against the skin—pure luxury. A piece I will cherish and pass down generations.',
    verified: true,
  },
  {
    id: 4,
    name: 'Clara Dubois',
    date: 'Just now',
    location: 'Munich, Germany',
    rating: 5,
    quote: 'Exquisite design, seamless insured delivery, and timeless elegance. Truly a world-class luxury atelier experience.',
    verified: true,
  },
];
