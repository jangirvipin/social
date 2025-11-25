import { Link } from 'react-router-dom'
import WhatsAppFab from './WhatsAppFab.jsx'

export default function Navbar() {
  return (
    <nav className="global-navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand">
            <strong>Social Blog</strong>
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/admin" className="nav-link nav-link--muted">
            Admin
          </Link>
          <WhatsAppFab message={`Hi, I found your blog list on the website and would like to chat.`} />
        </div>
      </div>
    </nav>
  )
}
