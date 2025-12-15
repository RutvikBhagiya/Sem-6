import Image from "next/image"

export default function WomenPage() {
  const products = [
    { img: "/images/women/s-1.jpg", price: "$25" },
    { img: "/images/women/s-2.jpg", price: "$30" },
    { img: "/images/women/s-3.jpg", price: "$28" },
    { img: "/images/women/s-4.jpg", price: "$32" },
    { img: "/images/women/s-5.jpg", price: "$27" },
    { img: "/images/women/s-6.jpg", price: "$33" },
    { img: "/images/women/s-7.jpg", price: "$40" },
    { img: "/images/women/s-8.jpg", price: "$22" },
    { img: "/images/women/s-9.jpg", price: "$26" },
    { img: "/images/women/s-10.jpg", price: "$35" },
  ];

  return (
    <div>
      <h1 className="fw-bold">Women's Section</h1>
      <hr/>

      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.img}>
            <div className="card-img-wrapper">
              <Image
                src={item.img}
                alt="Women Image"
                width={200}
                height={250}
                className="card-img"
              />
            </div>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
