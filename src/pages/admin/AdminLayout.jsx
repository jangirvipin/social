import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <main className="page page--admin">
      <header className="admin-hero">
        <div>
          <p className="eyebrow">Admin section</p>
          <h1>Content control room</h1>
          <p className="hero__subtext">
            Use `/admin/blogs` to create, update, or delete entries. Changes are reflected immediately
            on the public list.
          </p>
        </div>
        <Link to="/" className="button button--ghost">
          Return to public list ↗
        </Link>
      </header>
      <Outlet />
    </main>
  )
}
