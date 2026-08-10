import { useEffect, useState } from 'react'

function AdminDashBoard({ products, onAddProduct, onDeleteProduct, onRestoreDefaultProducts }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [available, setAvailable] = useState(true)
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState('')

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handlePhotoChange = (event) => {
    const file = event.target.files[0]
    if (!file) return

    if(photoPreview){
        URL.revokeObjectURL(photoPreview)
    }

    setPhotoFile(file)
    setPhotoPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const photoData = photoFile ? await fileToDataUrl(photoFile) : photoPreview

    onAddProduct({
      id: Date.now(),
      name: name.trim() || 'New plant',
      price: price.trim() || 'Price not set',
      photo: photoData || '',
      description: description.trim() || 'No description provided.',
      available,
    })

    setName('')
    setPrice('')
    setPhotoFile(null)
    setPhotoPreview('')
    setDescription('')
    setAvailable(true)
  }

  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview)
      }
    }
  }, [photoPreview])

  return (
    <section className="admin-page">
      <div className="admin-panel">
        <div className="admin-panel__header">
          <h1>Admin Dashboard</h1>
          <p>Use this dashboard to add plants, prices, and photos for the public catalog.</p>
        </div>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Plant name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Price
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="$18.00"
              required
            />
          </label>

          <label>
            Photo upload
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {photoPreview && (
              <img src={photoPreview} alt="Preview" className="preview-image" />
            )}
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="A short description of the plant"
              rows="4"
            />
          </label>

          <label className="checkbox-label">
            Available in stock
             <input
              type="checkbox"
              checked={available}
              onChange={(event) => setAvailable(event.target.checked)}
            />
          </label>

          <button type="submit">Add plant</button>
          <label>Restore default plants</label>
          <button
            type="button"
            className="restore-button"
            onClick={onRestoreDefaultProducts}
          > Restore default plants
          </button>
        </form>

        <section className="admin-preview">
          <h2>Current stock</h2>
          <div className="product-grid">
            {products.map((product) => (
              <figure key={product.id} className="product-card">
                {product.photo && (
                  <img
                    className="product-card__image"
                    src={product.photo}
                    alt={product.name}
                  />
                )}
                <figcaption className="product-card__title">
                  {product.name}
                  <span className="product-card__price">{product.price}</span>
                </figcaption>
                <p className="product-card__description">{product.description}</p>
                {!product.available && (
                  <span className="product-card__status">Unavailable</span>
                )}
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => onDeleteProduct(product.id)}>
                    Delete
                  </button>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default AdminDashBoard;
