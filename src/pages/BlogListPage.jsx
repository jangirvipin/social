import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchBlogs } from '../api/blogService.js'
// Navbar is provided by PublicLayout; don't render it here

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function load() {
      setStatus('loading')
      setError('')
      try {
        const data = await fetchBlogs()
        if (!isActive) return
        setBlogs(data)
        setStatus('success')
      } catch (err) {
        if (!isActive) return
        setError(err instanceof Error ? err.message : String(err))
        setStatus('error')
      }
    }

    load()

    return () => {
      isActive = false
    }
  }, [])

  const sortedBlogs = useMemo(() => [...blogs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)), [blogs])

  return (
    <>
      <section className="public-grid">
      <div className="public-status">
        {status === 'loading' && <span>Loading blogs…</span>}
        {status === 'error' && <span className="status status--error">{error}</span>}
      </div>
      {status === 'success' && !sortedBlogs.length ? (
        <div className="public-empty">
          <p>No posts found. Try a POST against `/admin/blogs` to seed content.</p>
        </div>
      ) : (
        <ul className="public-list">
          {sortedBlogs.map((blog) => (
            <li key={blog.id} className="blog-card">
              <Link to={`/blogs/${blog.id}`}>
                <div>
                  <p className="blog-card__meta">{blog.author}</p>
                  <h2>{blog.title}</h2>
                </div>
                <p className="blog-card__date">
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'medium',
                  }).format(new Date(blog.created_at))}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
    </>
  )
}
