# Blog API Reference

### Database details
- Backend connects to whichever Postgres database is provided via `DATABASE_URL` in the project `.env`.
- Table schema (auto-created at startup):
  - `id` (SERIAL PRIMARY KEY)
  - `title` (`TEXT`, required)
  - `content` (`TEXT`, required)
  - `author` (`TEXT`, required)
  - `created_at` and `updated_at` (`TIMESTAMPTZ`, default `NOW()`)
- All queries are plain SQL executed through `pg` (see `models/blogModel.js`).

### Environment setup
- Drop the Neon/Postgres URL into `.env`: `DATABASE_URL=postgresql://...` (Neon example already present).
- Server will log an error and crash during startup if `DATABASE_URL` is missing.
- SSL is forced for compatibility with hosted databases (e.g., Neon).

## Public endpoints (user-facing, no admin prefix)
- `GET /blogs`
  - Returns all blogs ordered by `created_at` descending.
  - Response shape: `{ data: Blog[] }`.
- `GET /blogs/:id`
  - Returns a single blog by ID.
  - 404 if the blog does not exist.
  - Response shape: `{ data: Blog }`.

### Blog payload example
```json
{
  "id": 5,
  "title": "How we built the blog",
  "content": "Details about implementation...",
  "author": "Jangi",
  "created_at": "2025-11-24 12:34:56",
  "updated_at": "2025-11-24 12:34:56"
}
```

## Admin endpoints (prefixed with `/admin/blogs`)
### Create
- `POST /admin/blogs`
  - Body: `title`, `content`, `author` (all required).
  - Returns the created blog record (`201 Created`).

### Update
- `PUT /admin/blogs/:id`
  - Body can include any of `title`, `content`, `author`.
  - Returns the updated blog record.
  - 404 if the blog does not exist, 400 if no body fields are provided.

### Delete
- `DELETE /admin/blogs/:id`
  - Removes the blog and returns `204 No Content`.
  - 404 if the blog does not exist.

## Error handling
- Missing required fields => `400 Bad Request` with an `error` message.
- Non-existent IDs => `404 Not Found` with `error` message.
- Unexpected errors => `500 Internal Server Error` with `{ error: 'Internal server error' }`.

## Frontend checklist
1. Use `GET /blogs` to populate lists, handle empty arrays gracefully.
2. Link to details via `GET /blogs/:id` and show loading/fallback states for 404.
3. Admin flows should point to `/admin/blogs` routes and submit JSON payloads.
4. No authentication is enforced at the moment, so avoid exposing admin URLs in public UI.
5. Monitor responses for the `error` field in case the server rejects input.
