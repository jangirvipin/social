import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchBlog } from '../api/blogService.js'

export default function BlogDetailPage() {
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!blogId) return
    let active = true

    async function load() {
      setStatus('loading')
      setError('')
      try {
        const data = await fetchBlog(blogId)
        if (!active) return
        setBlog(data)
        setStatus('success')
      } catch (err) {
        if (!active) return
        setError(err instanceof Error ? err.message : String(err))
        setStatus('error')
      }
    }

    load()
    return () => {
      active = false
    }
  }, [blogId])

  const published = blog?.created_at
  const updated = blog?.updated_at

  return (
    <section className="blog-detail">
      <Link to="/" className="link-back">
        ← Back to all blogs
      </Link>
      {status === 'loading' && <p className="panel__empty">Loading blog content…</p>}
      {status === 'error' && (
        <p className="status status--error" role="status">
          {error}
        </p>
      )}
      {status === 'success' && blog && (
        <article className="detail-card">
          <p className="blog-detail__meta">{blog.author}</p>
          <h2>{blog.title}</h2>
          <p className="blog-detail__timestamps">
            Published{' '}
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'long',
            }).format(new Date(published))}
          </p>
          <p className="content content--detail">{blog.content}</p>
          <p className="blog-detail__timestamps">
            Updated{' '}
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium',
              timeStyle: 'short',
            }).format(new Date(updated))}
          </p>
        </article>
      )}
    </section>
  )
}
