import { v4 as uuidv4 } from 'uuid';
import { Course, Click, CourseFilters } from '../types';

const COURSES_KEY = 'ncc_courses';
const CLICKS_KEY = 'ncc_clicks';

const SEED_COURSES: Course[] = [
  {
    id: uuidv4(),
    slug: 'midjourney-mastery',
    title: 'Midjourney Mastery: Create Stunning AI Art',
    provider: 'NeuralArt Academy',
    category_slug: 'design',
    level: 'beginner',
    format: 'online',
    price_from: 4900,
    duration: '4 weeks',
    tags: ['midjourney', 'ai-art', 'prompt-engineering'],
    short_desc: 'Learn to control Midjourney v6 like a pro. From basic prompts to complex parameters.',
    affiliate_url: 'https://example.com/midjourney',
    is_published: true,
    created_at: new Date('2023-10-01').toISOString(),
    updated_at: new Date('2023-10-05').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'stable-diffusion-deep-dive',
    title: 'Stable Diffusion Deep Dive',
    provider: 'AI Generators',
    category_slug: 'design',
    level: 'middle',
    format: 'online',
    price_from: 12000,
    duration: '8 weeks',
    tags: ['stable-diffusion', 'controlnet', 'lora'],
    short_desc: 'Install, configure and train your own models using Stable Diffusion and Automatic1111.',
    affiliate_url: 'https://example.com/sd',
    is_published: true,
    created_at: new Date('2023-09-15').toISOString(),
    updated_at: new Date('2023-09-20').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'chatgpt-marketing-automation',
    title: 'ChatGPT for Marketing Automation',
    provider: 'GrowthHackers',
    category_slug: 'marketing',
    level: 'beginner',
    format: 'online',
    price_from: 2900,
    duration: '2 weeks',
    tags: ['chatgpt', 'copywriting', 'seo'],
    short_desc: 'Automate your content creation, email marketing and SEO tasks with ChatGPT.',
    affiliate_url: 'https://example.com/chatgpt-marketing',
    is_published: true,
    created_at: new Date('2023-11-01').toISOString(),
    updated_at: new Date('2023-11-01').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'python-for-ai-beginners',
    title: 'Python for AI: From Zero to Hero',
    provider: 'CodeAcademy AI',
    category_slug: 'coding',
    level: 'beginner',
    format: 'online',
    price_from: 0,
    duration: '10 weeks',
    tags: ['python', 'machine-learning', 'basics'],
    short_desc: 'Start your journey into AI development with Python. No prior experience required.',
    affiliate_url: 'https://example.com/python-ai',
    is_published: true,
    created_at: new Date('2023-08-20').toISOString(),
    updated_at: new Date('2023-08-20').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'video-editing-with-ai',
    title: 'Video Editing Revolution with AI Tools',
    provider: 'VideoMakers',
    category_slug: 'video',
    level: 'middle',
    format: 'online',
    price_from: 6500,
    duration: '5 weeks',
    tags: ['runway', 'descript', 'premiere-pro'],
    short_desc: 'Speed up your workflow 10x using AI tools like RunwayML and Descript.',
    affiliate_url: 'https://example.com/video-ai',
    is_published: true,
    created_at: new Date('2023-10-15').toISOString(),
    updated_at: new Date('2023-10-15').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'business-automation-zapier-ai',
    title: 'Business Automation with Zapier & AI',
    provider: 'AutoBiz',
    category_slug: 'automation',
    level: 'middle',
    format: 'online',
    price_from: 8900,
    duration: '4 weeks',
    tags: ['zapier', 'openai-api', 'automation'],
    short_desc: 'Connect your business apps with AI logic to create autonomous workflows.',
    affiliate_url: 'https://example.com/biz-auto',
    is_published: true,
    created_at: new Date('2023-09-01').toISOString(),
    updated_at: new Date('2023-09-01').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'llm-development-langchain',
    title: 'Building Apps with LLMs and LangChain',
    provider: 'AI Devs',
    category_slug: 'coding',
    level: 'pro',
    format: 'online',
    price_from: 25000,
    duration: '12 weeks',
    tags: ['langchain', 'llm', 'vector-db'],
    short_desc: 'Advanced course on building complex applications using Large Language Models.',
    affiliate_url: 'https://example.com/llm-dev',
    is_published: true,
    created_at: new Date('2023-11-10').toISOString(),
    updated_at: new Date('2023-11-10').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'ai-for-executives',
    title: 'AI Strategy for Executives',
    provider: 'Business School Online',
    category_slug: 'business',
    level: 'pro',
    format: 'mixed',
    price_from: 50000,
    duration: '3 days',
    tags: ['strategy', 'management', 'future'],
    short_desc: 'How to implement AI in your company strategy. Intensive offline + online workshop.',
    affiliate_url: 'https://example.com/ai-exec',
    is_published: true,
    created_at: new Date('2023-12-01').toISOString(),
    updated_at: new Date('2023-12-01').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'photoshop-ai-firefly',
    title: 'Adobe Photoshop AI & Firefly Masterclass',
    provider: 'CreativeCloud Experts',
    category_slug: 'design',
    level: 'beginner',
    format: 'online',
    price_from: 3500,
    duration: '2 weeks',
    tags: ['photoshop', 'firefly', 'generative-fill'],
    short_desc: 'Master the new AI features in Adobe Photoshop.',
    affiliate_url: 'https://example.com/ps-ai',
    is_published: true,
    created_at: new Date('2023-10-25').toISOString(),
    updated_at: new Date('2023-10-25').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'copilot-productivity',
    title: 'Boost Productivity with Microsoft Copilot',
    provider: 'Office Masters',
    category_slug: 'business',
    level: 'beginner',
    format: 'online',
    price_from: 1500,
    duration: '1 week',
    tags: ['microsoft365', 'copilot', 'office'],
    short_desc: 'Learn how to use Copilot in Word, Excel, and PowerPoint.',
    affiliate_url: 'https://example.com/copilot',
    is_published: true,
    created_at: new Date('2023-11-20').toISOString(),
    updated_at: new Date('2023-11-20').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'make-automation-mastery',
    title: 'Make.com Automation Mastery',
    provider: 'NoCode Academy',
    category_slug: 'automation',
    level: 'middle',
    format: 'online',
    price_from: 9900,
    duration: '6 weeks',
    tags: ['make', 'integromat', 'workflow'],
    short_desc: 'Build complex automation scenarios with Make.com.',
    affiliate_url: 'https://example.com/make-auto',
    is_published: true,
    created_at: new Date('2023-09-10').toISOString(),
    updated_at: new Date('2023-09-10').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'ai-voice-cloning',
    title: 'AI Voice Cloning and Synthesis',
    provider: 'Audio AI',
    category_slug: 'video',
    level: 'middle',
    format: 'online',
    price_from: 5500,
    duration: '3 weeks',
    tags: ['elevenlabs', 'voice-ai', 'podcasting'],
    short_desc: 'Create realistic voiceovers and clones for your content.',
    affiliate_url: 'https://example.com/voice-ai',
    is_published: true,
    created_at: new Date('2023-10-30').toISOString(),
    updated_at: new Date('2023-10-30').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'seo-content-ai-scale',
    title: 'SEO Content at Scale with AI',
    provider: 'Traffic Gurus',
    category_slug: 'marketing',
    level: 'pro',
    format: 'online',
    price_from: 15000,
    duration: '4 weeks',
    tags: ['seo', 'programmatic-seo', 'gpt-4'],
    short_desc: 'Build programmatic SEO empires using AI content generation.',
    affiliate_url: 'https://example.com/seo-scale',
    is_published: true,
    created_at: new Date('2023-11-15').toISOString(),
    updated_at: new Date('2023-11-15').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'ai-avatar-creation',
    title: 'Creating AI Avatars for Social Media',
    provider: 'Social Viral',
    category_slug: 'video',
    level: 'beginner',
    format: 'online',
    price_from: 2000,
    duration: '1 week',
    tags: ['heygen', 'd-id', 'social-media'],
    short_desc: 'Create talking AI avatars for your TikTok and Reels.',
    affiliate_url: 'https://example.com/ai-avatars',
    is_published: true,
    created_at: new Date('2023-12-05').toISOString(),
    updated_at: new Date('2023-12-05').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'finetuning-llms',
    title: 'Fine-Tuning LLMs on Your Own Data',
    provider: 'Data Science Pro',
    category_slug: 'coding',
    level: 'pro',
    format: 'online',
    price_from: 30000,
    duration: '8 weeks',
    tags: ['pytorch', 'huggingface', 'llama-2'],
    short_desc: 'Technical deep dive into fine-tuning open source models.',
    affiliate_url: 'https://example.com/finetune',
    is_published: true,
    created_at: new Date('2023-10-10').toISOString(),
    updated_at: new Date('2023-10-10').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'ai-ethics-and-safety',
    title: 'AI Ethics and Safety Compliance',
    provider: 'Tech Law Inst',
    category_slug: 'business',
    level: 'middle',
    format: 'offline',
    price_from: 20000,
    duration: '2 days',
    tags: ['ethics', 'law', 'compliance'],
    short_desc: 'Understanding the legal and ethical implications of AI adoption.',
    affiliate_url: 'https://example.com/ai-ethics',
    is_published: true,
    created_at: new Date('2023-09-25').toISOString(),
    updated_at: new Date('2023-09-25').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'blender-ai-workflows',
    title: 'Blender 3D + AI Textures Workflows',
    provider: '3D World',
    category_slug: 'design',
    level: 'middle',
    format: 'online',
    price_from: 7000,
    duration: '6 weeks',
    tags: ['blender', '3d', 'textures'],
    short_desc: 'Enhance your 3D modeling with AI-generated textures and assets.',
    affiliate_url: 'https://example.com/blender-ai',
    is_published: true,
    created_at: new Date('2023-11-05').toISOString(),
    updated_at: new Date('2023-11-05').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'email-marketing-ai-personalization',
    title: 'Hyper-Personalized Email Marketing with AI',
    provider: 'Email King',
    category_slug: 'marketing',
    level: 'middle',
    format: 'online',
    price_from: 4500,
    duration: '3 weeks',
    tags: ['email', 'personalization', 'crm'],
    short_desc: 'Increase open rates using AI-driven personalization.',
    affiliate_url: 'https://example.com/email-ai',
    is_published: true,
    created_at: new Date('2023-10-20').toISOString(),
    updated_at: new Date('2023-10-20').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'notion-ai-mastery',
    title: 'Organize Life & Work with Notion AI',
    provider: 'Productivity Hub',
    category_slug: 'business',
    level: 'beginner',
    format: 'online',
    price_from: 2500,
    duration: '2 weeks',
    tags: ['notion', 'productivity', 'organization'],
    short_desc: 'Build a second brain using Notion and its AI features.',
    affiliate_url: 'https://example.com/notion-ai',
    is_published: true,
    created_at: new Date('2023-12-10').toISOString(),
    updated_at: new Date('2023-12-10').toISOString(),
  },
  {
    id: uuidv4(),
    slug: 'ai-coding-assistant-cursor',
    title: 'Coding Faster with Cursor and Copilot',
    provider: 'DevSpeed',
    category_slug: 'coding',
    level: 'middle',
    format: 'online',
    price_from: 5000,
    duration: '3 weeks',
    tags: ['cursor', 'vscode', 'coding'],
    short_desc: 'Switch to AI-first code editors and double your velocity.',
    affiliate_url: 'https://example.com/cursor-ai',
    is_published: true,
    created_at: new Date('2023-11-25').toISOString(),
    updated_at: new Date('2023-11-25').toISOString(),
  }
];

// Initialize
if (!localStorage.getItem(COURSES_KEY)) {
  localStorage.setItem(COURSES_KEY, JSON.stringify(SEED_COURSES));
}

if (!localStorage.getItem(CLICKS_KEY)) {
  localStorage.setItem(CLICKS_KEY, JSON.stringify([]));
}

export const db = {
  getCourses: (filters?: Partial<CourseFilters>) => {
    const coursesStr = localStorage.getItem(COURSES_KEY) || '[]';
    const clicksStr = localStorage.getItem(CLICKS_KEY) || '[]';
    let courses: Course[] = JSON.parse(coursesStr);
    const clicks: Click[] = JSON.parse(clicksStr);

    // Calculate click counts
    const clickCounts: Record<string, number> = {};
    clicks.forEach(c => {
      clickCounts[c.course_id] = (clickCounts[c.course_id] || 0) + 1;
    });

    courses = courses.map(c => ({
      ...c,
      clicks: clickCounts[c.id] || 0
    }));

    if (!filters) return courses;

    return courses.filter(c => {
      let matches = true;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        matches = matches && (c.title.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q)));
      }
      if (filters.category && filters.category !== 'all') {
        matches = matches && c.category_slug === filters.category;
      }
      if (filters.level && filters.level !== 'all') {
        matches = matches && c.level === filters.level;
      }
      if (filters.format && filters.format !== 'all') {
        matches = matches && c.format === filters.format;
      }
      if (filters.price_min !== undefined && filters.price_min !== '') {
        matches = matches && c.price_from >= Number(filters.price_min);
      }
      if (filters.price_max !== undefined && filters.price_max !== '') {
        matches = matches && c.price_from <= Number(filters.price_max);
      }
      return matches;
    }).sort((a, b) => {
        if (filters.sort === 'popular') return (b.clicks || 0) - (a.clicks || 0);
        if (filters.sort === 'new') return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        if (filters.sort === 'cheap') return a.price_from - b.price_from;
        if (filters.sort === 'expensive') return b.price_from - a.price_from;
        return 0;
    });
  },

  getCourse: (slugOrId: string) => {
    const courses = db.getCourses();
    return courses.find(c => c.slug === slugOrId || c.id === slugOrId);
  },

  addCourse: (course: Course) => {
    const courses = JSON.parse(localStorage.getItem(COURSES_KEY) || '[]');
    courses.push(course);
    localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
  },

  updateCourse: (id: string, updates: Partial<Course>) => {
    const courses = JSON.parse(localStorage.getItem(COURSES_KEY) || '[]');
    const index = courses.findIndex((c: Course) => c.id === id);
    if (index !== -1) {
      courses[index] = { ...courses[index], ...updates, updated_at: new Date().toISOString() };
      localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
    }
  },

  trackClick: (click: Click) => {
    const clicks = JSON.parse(localStorage.getItem(CLICKS_KEY) || '[]');
    clicks.push(click);
    localStorage.setItem(CLICKS_KEY, JSON.stringify(clicks));
  },

  getAllClicks: () => {
    return JSON.parse(localStorage.getItem(CLICKS_KEY) || '[]');
  }
};
