
async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = await params

  const response = await fetch(
    `https://667198fde083e62ee43c493d.mockapi.io/Students/products/${id}`)

  const product = await response.json()

  return (
    <div>
      <h1>Product Detail</h1>

      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.productName}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  )
}

export default ProductDetail
