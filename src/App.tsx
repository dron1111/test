import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { CategoryPage } from './pages/CategoryPage';
import { RedirectPage } from './pages/RedirectPage';
import { AdminListPage } from './pages/admin/AdminListPage';
import { AdminCoursePage } from './pages/admin/AdminCoursePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CatalogPage />} />
          <Route path="/course/:slug" element={<CourseDetailsPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/admin/courses" element={<AdminListPage />} />
          <Route path="/admin/course/:id" element={<AdminCoursePage />} />
        </Route>
        {/* Redirect page might not need the standard layout, but let's keep it simple or exclude it if we want a clean redirect page */}
        <Route path="/out/:slug" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
