

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminLayout from './pages/admin/AdminLayout.jsx'
import BlogDetailPage from './pages/BlogDetailPage.jsx'
import BlogListPage from './pages/BlogListPage.jsx'
import PublicLayout from './layouts/PublicLayout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<BlogListPage />} />
          <Route path="blogs/:blogId" element={<BlogDetailPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
