import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../lib/db';
import { Course } from '../../types';
import { SEO } from '../../components/SEO';

const DEFAULT_COURSE: Partial<Course> = {
  title: '',
  slug: '',
  provider: '',
  category_slug: 'design',
  level: 'beginner',
  format: 'online',
  price_from: 0,
  duration: '',
  tags: [],
  short_desc: '',
  affiliate_url: '',
  is_published: true,
};

export function AdminCoursePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'new';
  
  const [formData, setFormData] = useState<Partial<Course>>(DEFAULT_COURSE);
  const [tagsInput, setTagsInput] = useState('');

  useEffect(() => {
    if (!isNew && id) {
      const course = db.getCourse(id);
      if (course) {
        setFormData(course);
        setTagsInput(course.tags.join(', '));
      }
    }
  }, [id, isNew]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
    setFormData(prev => ({
      ...prev,
      tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = new Date().toISOString();
    
    if (isNew) {
      const newCourse: Course = {
        ...(formData as Course),
        id: uuidv4(),
        created_at: now,
        updated_at: now,
      };
      db.addCourse(newCourse);
    } else if (id) {
      db.updateCourse(id, formData);
    }
    
    navigate('/admin/courses');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <SEO title={isNew ? 'New Course' : 'Edit Course'} />
      
      <h1 className="text-2xl font-bold text-slate-900 mb-8">
        {isNew ? 'Create New Course' : 'Edit Course'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        
        {/* Basic Info */}
        <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.title} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
                <input 
                    type="text" 
                    name="slug" 
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.slug} 
                    onChange={handleChange} 
                />
            </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Provider</label>
                <input 
                    type="text" 
                    name="provider" 
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.provider} 
                    onChange={handleChange} 
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Affiliate URL</label>
                <input 
                    type="url" 
                    name="affiliate_url" 
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.affiliate_url} 
                    onChange={handleChange} 
                />
            </div>
        </div>

        {/* Classification */}
        <div className="grid gap-4 sm:grid-cols-3">
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                <select 
                    name="category_slug" 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.category_slug} 
                    onChange={handleChange}
                >
                    <option value="design">Design</option>
                    <option value="video">Video</option>
                    <option value="marketing">Marketing</option>
                    <option value="automation">Automation</option>
                    <option value="coding">Coding</option>
                    <option value="business">Business</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
                <select 
                    name="level" 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.level} 
                    onChange={handleChange}
                >
                    <option value="beginner">Beginner</option>
                    <option value="middle">Middle</option>
                    <option value="pro">Pro</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Format</label>
                <select 
                    name="format" 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.format} 
                    onChange={handleChange}
                >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>
        </div>

        {/* Details */}
        <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Price (from)</label>
                <input 
                    type="number" 
                    name="price_from" 
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.price_from} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Duration</label>
                <input 
                    type="text" 
                    name="duration" 
                    placeholder="e.g. 4 weeks"
                    required 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.duration} 
                    onChange={handleChange} 
                />
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
            <input 
                type="text" 
                placeholder="ai, python, web"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={tagsInput} 
                onChange={handleTagsChange} 
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
            <textarea 
                name="short_desc" 
                required 
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={formData.short_desc} 
                onChange={handleChange} 
            />
        </div>

        <div className="flex justify-end gap-4 pt-4">
            <button 
                type="button" 
                onClick={() => navigate('/admin/courses')}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
                Cancel
            </button>
            <button 
                type="submit" 
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
                Save Course
            </button>
        </div>
      </form>
    </div>
  );
}
