const apiHost = import.meta.env.VITE_API_URL?.replace(/\/+$/u, '') ?? 'http://localhost:3000'

async function request(path, options) {
  const response = await fetch(`${apiHost}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  const text = await response.text()
  let payload = null
  if (text) {
    try {
      payload = JSON.parse(text)
    } catch {
      payload = null
    }
  }

  if (!response.ok) {
    throw new Error(payload?.error ?? response.statusText)
  }

  return payload
}

export async function fetchBlogs() {
  const payload = await request('/blogs')
  return payload?.data ?? []
}

export async function fetchBlog(blogId) {
  const payload = await request(`/blogs/${blogId}`)
  return payload?.data ?? null
}

export async function createBlog(blog) {
  return request('/admin/blogs', {
    method: 'POST',
    body: JSON.stringify(blog),
  })
}

export async function updateBlog(blogId, blog) {
  return request(`/admin/blogs/${blogId}`, {
    method: 'PUT',
    body: JSON.stringify(blog),
  })
}

export async function deleteBlog(blogId) {
  await request(`/admin/blogs/${blogId}`, {
    method: 'DELETE',
  })
}
