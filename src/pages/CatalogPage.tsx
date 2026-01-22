import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db } from '../lib/db';
import { Course, CourseFilters } from '../types';
import { CourseCard } from '../components/CourseCard';
import { FilterBar } from '../components/FilterBar';
import { SEO } from '../components/SEO';

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  
  const [filters, setFilters] = useState<CourseFilters>({
    query: searchParams.get('query') || '',
    category: searchParams.get('category') || 'all',
    level: searchParams.get('level') || 'all',
    format: searchParams.get('format') || 'all',
    price_min: searchParams.get('price_min') ? Number(searchParams.get('price_min')) : '',
    price_max: searchParams.get('price_max') ? Number(searchParams.get('price_max')) : '',
    sort: (searchParams.get('sort') as any) || 'popular',
  });

  useEffect(() => {
    const fetchedCourses = db.getCourses(filters);
    setCourses(fetchedCourses);
    
    // Update URL params
    const params: any = {};
    if (filters.query) params.query = filters.query;
    if (filters.category !== 'all') params.category = filters.category;
    if (filters.level !== 'all') params.level = filters.level;
    if (filters.format !== 'all') params.format = filters.format;
    if (filters.price_min) params.price_min = String(filters.price_min);
    if (filters.price_max) params.price_max = String(filters.price_max);
    if (filters.sort !== 'popular') params.sort = filters.sort;
    
    setSearchParams(params, { replace: true });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title="Course Catalog" description="Browse all AI and Neural Network courses." />
      
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <aside className="w-full lg:w-64 lg:flex-none">
          <FilterBar filters={filters} onFilterChange={setFilters} />
        </aside>
        
        <div className="flex-1 w-full">
          <h1 className="mb-6 text-2xl font-bold text-slate-900">
            All Courses ({courses.length})
          </h1>
          
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
              <p className="text-lg">No courses found matching your criteria.</p>
              <button 
                onClick={() => setFilters({
                    query: '',
                    category: 'all',
                    level: 'all',
                    format: 'all',
                    price_min: '',
                    price_max: '',
                    sort: 'popular'
                })}
                className="mt-2 text-indigo-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
