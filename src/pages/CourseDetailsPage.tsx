import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../lib/db';
import { Course } from '../types';
import { SEO } from '../components/SEO';
import { Clock, BarChart, Monitor, Calendar, Tag, ExternalLink, ArrowLeft } from 'lucide-react';

export function CourseDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (slug) {
      const found = db.getCourse(slug);
      if (found) setCourse(found);
    }
  }, [slug]);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Course not found</h1>
        <Link to="/courses" className="mt-4 inline-block text-indigo-600 hover:underline">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-16">
      <SEO title={course.title} description={course.short_desc} />
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
            <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Catalog
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                            {course.category_slug}
                        </span>
                         <span className="text-slate-500 font-medium">
                            by {course.provider}
                         </span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
                        {course.title}
                    </h1>
                    <p className="text-lg text-slate-600">
                        {course.short_desc}
                    </p>
                </div>
                
                <div className="flex-none w-full lg:w-80">
                     <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">
                             {course.price_from === 0 ? 'Free' : (
                                 <>
                                   <span className="text-sm font-normal text-slate-500 mr-1">from</span>
                                   {course.price_from.toLocaleString('ru-RU')} ₽
                                 </>
                               )}
                        </div>
                        <Link 
                            to={`/out/${course.slug}`}
                            target="_blank"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95"
                        >
                            Start Learning
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                        <p className="mt-3 text-center text-xs text-slate-400">
                            You will be redirected to the partner website.
                        </p>
                     </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">About this course</h2>
                    <div className="prose prose-slate max-w-none">
                        <p>{course.short_desc}</p>
                        <p className="text-slate-500 italic">
                            (Full description would be here. Using short description for MVP demo.)
                        </p>
                    </div>
                </div>

                 <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        {course.tags.map(tag => (
                            <div key={tag} className="flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-600">
                                <Tag className="h-3 w-3" />
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                 <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                    <h3 className="font-semibold text-slate-900">Course Details</h3>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">Duration</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-600">
                            <BarChart className="h-4 w-4" />
                            <span className="text-sm">Level</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900 capitalize">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Monitor className="h-4 w-4" />
                            <span className="text-sm">Format</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900 capitalize">{course.format}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">Last Updated</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">
                             {new Date(course.updated_at).toLocaleDateString()}
                        </span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
