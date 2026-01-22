import { Link } from 'react-router-dom';
import { Course } from '../types';
import { Clock, BarChart, Monitor } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link 
      to={`/course/${course.slug}`} 
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
           <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            {course.category_slug}
          </span>
          <span className="text-xs text-slate-400">{course.provider}</span>
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="mb-4 text-sm text-slate-500 line-clamp-2 flex-1">
          {course.short_desc}
        </p>
        
        <div className="mt-auto space-y-3 border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <BarChart className="h-3 w-3" />
              <span className="capitalize">{course.level}</span>
            </div>
            <div className="flex items-center gap-1">
              <Monitor className="h-3 w-3" />
              <span className="capitalize">{course.format}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center font-semibold text-indigo-600">
               {course.price_from === 0 ? 'Free' : (
                 <>
                   <span className="text-xs mr-0.5">from</span>
                   {course.price_from.toLocaleString('ru-RU')} ₽
                 </>
               )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
