export type CourseLevel = 'beginner' | 'middle' | 'pro';
export type CourseFormat = 'online' | 'offline' | 'mixed';

export interface Course {
  id: string;
  slug: string;
  title: string;
  provider: string;
  category_slug: string;
  level: CourseLevel;
  format: CourseFormat;
  price_from: number;
  duration: string;
  tags: string[];
  short_desc: string;
  affiliate_url: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  clicks?: number; // Calculated field
}

export interface Click {
  id: string;
  course_id: string;
  ts: number;
  referer?: string;
  utm_source?: string;
  utm_campaign?: string;
}

export interface CourseFilters {
  query: string;
  category: string;
  level: string;
  format: string;
  price_min: number | '';
  price_max: number | '';
  sort: 'popular' | 'new' | 'cheap' | 'expensive';
}
