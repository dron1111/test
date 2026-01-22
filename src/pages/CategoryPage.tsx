import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../lib/db';
import { Course } from '../types';
import { CourseCard } from '../components/CourseCard';
import { SEO } from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (slug) {
      const fetched = db.getCourses({ category: slug });
      setCourses(fetched);
    }
  }, [slug]);

  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Category';

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title={`${categoryName} Courses`} description={`Best AI courses in ${categoryName}.`} />
      
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">
           {categoryName} Courses
        </h1>
        <p className="mt-2 text-slate-600">
            Explore our collection of top-rated courses for {categoryName}.
        </p>
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-slate-500">
          <p>No courses found in this category.</p>
          <Link to="/courses" className="mt-2 inline-block text-indigo-600 hover:underline">View all courses</Link>
        </div>
      )}
    </div>
  );
}
