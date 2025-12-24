import React from 'react'
import pool from "@/lib/db";
import { prisma } from '@/lib/prisma';

export default async function Products() {
    // const [products] : any = await pool.query('SELECT * FROM Products');
    const products : any = await prisma.product.findMany();
    return(
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product: any) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                </tr>
                ))}
            </tbody>
        </table>

    )
}


