import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function PublicLayout() {
  return (
    <main className="page page--public">
      <Navbar />
      <header className="hero">
        <div>
          <p className="eyebrow">Public view</p>
          <h1>Explore the latest stories</h1>
          <p className="hero__subtext">
            Browse every blog entry before diving deeper. Click any title to call `/blogs/:id` and
            get the full article.
          </p>
        </div>
        <div className="hero__actions">
          <Link to="/admin" className="button button--ghost">
            Admin tools ↗
          </Link>
        </div>
      </header>
      <Outlet />
    </main>
  )
}
