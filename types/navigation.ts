export interface NavItem {
  id: string;
  label: string;
  path: string;
  children?: NavItem[];
}

export interface HeroConfig {
  id: string;
  eyebrow: string;
  title: string;
  titleEditorial?: string;
  description?: string;
  image: string;
  fallbackImage?: string;
  imageAlt?: string;
  variant?: 'home' | 'inner';
  showActions?: boolean;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}
