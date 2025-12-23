import Link from 'next/link'

async function ProducList() {
  const response = await fetch('https://667198fde083e62ee43c493d.mockapi.io/Students/products')

  const products = await response.json()

  return (
    <div>
      <h1>Product List</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product:any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <Link href={`/products/${product.id}`}>
                  <button>View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProducList
