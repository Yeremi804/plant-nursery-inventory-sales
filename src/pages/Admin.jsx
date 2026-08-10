import AdminDashBoard from '../components/AdminDashBoard'

function Admin({ products, onAddProduct, onDeleteProduct, onRestoreDefaultProducts }) {
  return (
    <AdminDashBoard
      products={products}
      onAddProduct={onAddProduct}
      onDeleteProduct={onDeleteProduct}
      onRestoreDefaultProducts={onRestoreDefaultProducts}
    />
  )
}

export default Admin;
 