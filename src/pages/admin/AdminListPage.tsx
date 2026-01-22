import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../lib/db';
import { Course } from '../../types';
import { SEO } from '../../components/SEO';
import { Plus, Edit, ExternalLink } from 'lucide-react';

export function AdminListPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Get all courses, no filters
    setCourses(db.getCourses());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title="Admin - Courses" />
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Admin: Courses</h1>
        <Link 
          to="/admin/course/new" 
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          Add Course
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Provider</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Clicks</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <div className="max-w-xs truncate" title={course.title}>{course.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      {course.category_slug}
                    </span>
                  </td>
                  <td className="px-6 py-4">{course.provider}</td>
                  <td className="px-6 py-4">{course.price_from} ₽</td>
                  <td className="px-6 py-4">{course.clicks || 0}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link 
                        to={`/course/${course.slug}`} 
                        target="_blank"
                        className="p-1 text-slate-400 hover:text-indigo-600"
                        title="View"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link 
                        to={`/admin/course/${course.id}`}
                        className="p-1 text-slate-400 hover:text-indigo-600"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
