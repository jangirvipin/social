import { useEffect, useMemo, useState } from 'react'
import { createBlog, deleteBlog, fetchBlogs, updateBlog } from '../../api/blogService.js'

const emptyForm = {
  title: '',
  author: '',
  content: '',
}

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [feedback, setFeedback] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    refresh()
  }, [])

  async function refresh() {
    setLoading(true)
    setError('')
    try {
      const data = await fetchBlogs()
      setBlogs(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  function applyFeedback(message) {
    setFeedback(message)
  }

  function handleSelect(blog) {
    setSelectedId(blog.id)
    setForm({
      title: blog.title,
      author: blog.author,
      content: blog.content,
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleCreate(event) {
    event.preventDefault()
    if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
      setError('All fields are required to create a blog.')
      return
    }
    setBusy(true)
    setError('')
    try {
      await createBlog(form)
      setForm(emptyForm)
      setSelectedId(null)
      applyFeedback('Blog created successfully.')
      await refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleUpdate(event) {
    event.preventDefault()
    if (!selectedId) {
      setError('Select a blog to update.')
      return
    }
    if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
      setError('All fields are required to update a blog.')
      return
    }
    setBusy(true)
    setError('')
    try {
      await updateBlog(selectedId, form)
      applyFeedback('Blog updated successfully.')
      await refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleDelete() {
    if (!selectedId) {
      setError('Select a blog before deleting.')
      return
    }
    setBusy(true)
    setError('')
    try {
      await deleteBlog(selectedId)
      applyFeedback('Blog deleted successfully.')
      setSelectedId(null)
      setForm(emptyForm)
      await refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setBusy(false)
    }
  }

  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    [blogs],
  )

  return (
    <section className="admin-shell">
      <div className="admin-shell__list">
        <div className="admin-shell__header">
          <h2>Existing blogs</h2>
          {loading && <span>loading…</span>}
        </div>
        {error && <p className="status status--error">{error}</p>}
        {sortedBlogs.length ? (
          <ul>
            {sortedBlogs.map((blog) => (
              <li key={blog.id}>
                <button
                  type="button"
                  className={blog.id === selectedId ? 'is-active' : ''}
                  onClick={() => handleSelect(blog)}
                >
                  <span>{blog.title}</span>
                  <small>{blog.author}</small>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p className="panel__empty">No blogs yet. Create one below.</p>
        )}
      </div>

      <form className="admin-shell__form" onSubmit={handleCreate}>
        <div className="admin-shell__header">
          <h2>{selectedId ? 'Edit blog' : 'Create new blog'}</h2>
          {feedback && <span className="status status--success">{feedback}</span>}
        </div>
        <label>
          <span>Title</span>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="A descriptive heading"
          />
        </label>
        <label>
          <span>Author</span>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Who wrote the story?"
          />
        </label>
        <label>
          <span>Content</span>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            placeholder="Full article body"
          />
        </label>
        <div className="admin-shell__actions">
          <button type="submit" className="button" disabled={busy}>
            {busy ? 'Submitting…' : 'Save new blog'}
          </button>
          <button
            type="button"
            className="button button--ghost"
            onClick={handleUpdate}
            disabled={busy || !selectedId}
          >
            Update selected
          </button>
          <button
            type="button"
            className="button button--danger"
            onClick={handleDelete}
            disabled={busy || !selectedId}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  )
}
