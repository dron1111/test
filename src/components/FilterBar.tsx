import { CourseFilters } from '../types';
import { Search } from 'lucide-react';

interface FilterBarProps {
  filters: CourseFilters;
  onFilterChange: (filters: CourseFilters) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const handleChange = (key: keyof CourseFilters, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          value={filters.query}
          onChange={(e) => handleChange('query', e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {/* Category */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">Category</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-sm outline-none focus:border-indigo-500"
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="design">Design</option>
            <option value="video">Video</option>
            <option value="marketing">Marketing</option>
            <option value="automation">Automation</option>
            <option value="coding">Coding</option>
            <option value="business">Business</option>
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">Level</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-sm outline-none focus:border-indigo-500"
            value={filters.level}
            onChange={(e) => handleChange('level', e.target.value)}
          >
            <option value="all">Any Level</option>
            <option value="beginner">Beginner</option>
            <option value="middle">Middle</option>
            <option value="pro">Pro</option>
          </select>
        </div>

        {/* Format */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">Format</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-sm outline-none focus:border-indigo-500"
            value={filters.format}
            onChange={(e) => handleChange('format', e.target.value)}
          >
            <option value="all">Any Format</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-lg border border-slate-200 py-2 px-3 text-sm outline-none focus:border-indigo-500"
              value={filters.price_min}
              onChange={(e) => handleChange('price_min', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-lg border border-slate-200 py-2 px-3 text-sm outline-none focus:border-indigo-500"
              value={filters.price_max}
              onChange={(e) => handleChange('price_max', e.target.value)}
            />
          </div>
        </div>
        
         {/* Sort */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">Sort By</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-sm outline-none focus:border-indigo-500"
            value={filters.sort}
            onChange={(e) => handleChange('sort', e.target.value)}
          >
            <option value="popular">Popular (Clicks)</option>
            <option value="new">Newest</option>
            <option value="cheap">Price: Low to High</option>
            <option value="expensive">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
