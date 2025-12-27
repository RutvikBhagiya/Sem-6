import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ProductDetail({params} : {params:{id:string}}){

  const {id} = await params;

  try{
    const product  = await prisma.product.findUnique({
      where : {
        id: Number(id),
      },
    })

    if(!product){
        return(
          <p style={{ color: "red" }}>
            Product Not Exist.
          </p>
        );
    }
    return(
      <>
        <table border={1} cellPadding={10}>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{product.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{product.title}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{product.price}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{product.category}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
      <Link href={"/products"} className="m-5">Back</Link>
      </>
    )
  }
  catch(error){
    console.error("Database error:", error);
    return(
      <p style={{ color: "red" }}>
        Something went wrong while fetching the user.
      </p>
    )
  }
}