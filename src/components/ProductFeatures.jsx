function ProductFeatures({ products }) {
  return (
    <section className="products">
      <h2>Here is currently our stock available right now</h2>
      <div className="product-grid">
        {products.map((product) => (
          <figure key={product.id} className="product-card">
            <img
              className="product-card__image"
              src={product.photo}
              alt={product.name}
            />
            <figcaption className="product-card__title">
              {product.name}
              <span className="product-card__price">{product.price}</span>
            </figcaption>
            <p className="product-card__description">{product.description}</p>
            {!product.available && (
              <span className="product-card__status">Unavailable</span>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProductFeatures;
