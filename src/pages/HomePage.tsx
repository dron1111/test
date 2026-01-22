import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';
import { db } from '../lib/db';
import { Course } from '../types';
import { CourseCard } from '../components/CourseCard';
import { SEO } from '../components/SEO';

export function HomePage() {
  const [popularCourses, setPopularCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get popular courses (sort by clicks)
    const courses = db.getCourses({ sort: 'popular' });
    setPopularCourses(courses.slice(0, 8));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col gap-12 pb-12">
      <SEO title="Home" description="Find the best Neural Network and AI courses." />
      
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Curated AI Courses</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Master the Future with <br className="hidden sm:inline" />
            <span className="text-indigo-600">Neural Networks</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Discover top-rated courses on AI, Machine Learning, Data Science, and more. 
            Level up your skills with the best resources available.
          </p>
          
          <form onSubmit={handleSearch} className="mx-auto max-w-lg relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for courses (e.g. 'Midjourney', 'Python')..."
              className="w-full rounded-full border border-slate-200 py-4 pl-12 pr-4 text-base shadow-lg shadow-slate-100 outline-none transition-all focus:border-indigo-500 focus:shadow-xl focus:ring-1 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Design', 'Video', 'Marketing', 'Coding'].map((cat) => (
              <Link 
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Popular Courses</h2>
          <Link to="/courses" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
            View All &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
