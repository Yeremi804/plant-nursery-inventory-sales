import { useEffect, useState } from 'react'
import './App.css'
import ProductFeatures from './components/ProductFeatures'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import plant1 from './assets/download.webp'
import plant2 from './assets/images.jpg'
import plant3 from './assets/images (1).jpg'

const initialProducts = [
  {
    id: 1,
    name: 'Green Fern',
    price: '$24.99',
    description: 'Fresh potted fern with bright, healthy leaves.',
    photo: plant1,
    available: true,
  },
  {
    id: 2,
    name: 'Affrican Tree',
    price: '$19.99',
    description: 'Easy-care succulents for sunny windowsills.',
    photo: plant2,
    available: true,
  },
  {
    id: 3,
    name: 'Monstera Baby',
    price: '$29.99',
    description: 'Young Monstera plant with developing split leaves.',
    photo: plant3,
    available: true,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState('home')
  const [products, setProducts] = useState(() => {
    if (typeof window === 'undefined') return initialProducts
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored) : initialProducts
  })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const handleAddProduct = (newProduct) => {
    setProducts((current) => [...current, newProduct])
  }

  const handleDeleteProduct = (productId) => {
    setProducts((current) => current.filter((product) => product.id !== productId))
  }

  const handleRestoreDefaultProducts = () => {
    setProducts(initialProducts)
  }

  return (
    <div className="page">
      {/* Moss background: decorative layers stay behind the real page content. */}
      <div className="aura-layer aura-layer-1" aria-hidden="true" />
      <div className="aura-layer aura-layer-2" aria-hidden="true" />
      <div className="aura-grain" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="moss-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#moss-grain)" />
        </svg>
      </div>
      <div className="page-content">
      <header className="topbar">
        <a className="brand" href="/">
          Raíces & Terra
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label="toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button type="button" onClick={() => setPage('home')}>
            Home
          </button>
          <button type="button" onClick={() => setPage('about')}>
            About
          </button>
          <button type="button" onClick={() => setPage('contact')}>
            Contact
          </button>
          <button type="button" onClick={() => setPage('login')} className="nav-login">
            Login
          </button>
          <button type="button" onClick={() => setPage('admin')}>
            Admin
          </button>
        </nav>
      </header>

      {page === 'home' && (
        <>
          <main className="hero">
            <p className="eyebrow">Welcome to the nursery</p>
            <h1>Grow a greener home with healthy plants</h1>
            <p className="description">
              Discover fresh, lush greenery for every room. Add, manage, and preview your collection in one beautiful dashboard.
            </p>
            <div className="hero-actions">
              <button type="button" className="hero-primary" onClick={() => setPage('login')}>
                Start browsing
              </button>
              <button type="button" className="hero-secondary" onClick={() => setPage('admin')}>
                Manage inventory
              </button>
            </div>
          </main>

          <ProductFeatures products={products} />
        </>
      )}

      {page === 'login' && <Login />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
      {page === 'admin' && (
        <Admin
          products={products}
          onAddProduct={handleAddProduct}
          onDeleteProduct={handleDeleteProduct}
          onRestoreDefaultProducts={handleRestoreDefaultProducts}
        />
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Brand</p>
      </footer>
      </div>
    </div>
  )
}

export default App
