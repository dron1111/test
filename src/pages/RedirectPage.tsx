import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { SEO } from '../components/SEO';
import { Loader2 } from 'lucide-react';

export function RedirectPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;

    const course = db.getCourse(slug);
    
    if (course) {
      // Log click
      db.trackClick({
        id: uuidv4(),
        course_id: course.id,
        ts: Date.now(),
        referer: document.referrer,
        utm_source: searchParams.get('utm_source') || undefined,
        utm_campaign: searchParams.get('utm_campaign') || undefined,
      });

      // Redirect
      // In a real app, this would be a server-side 302.
      // Here we use window.location.replace
      setTimeout(() => {
          window.location.replace(course.affiliate_url);
      }, 1500); // Small delay to show branding/loading
    } else {
      setError('Course not found');
      setTimeout(() => {
          window.location.href = '/';
      }, 3000);
    }
  }, [slug, searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <SEO title="Redirecting..." />
      
      {error ? (
        <div className="text-center">
            <h1 className="text-xl font-bold text-red-600">{error}</h1>
            <p className="text-slate-500">Redirecting to home...</p>
        </div>
      ) : (
        <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto" />
            <h1 className="text-2xl font-bold text-slate-900">Redirecting to Partner...</h1>
            <p className="text-slate-500">Please wait while we send you to the course page.</p>
        </div>
      )}
    </div>
  );
}
