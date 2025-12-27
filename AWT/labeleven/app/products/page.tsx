import React from 'react'
import pool from "@/lib/db";
import { prisma } from '@/lib/prisma';
import { product } from '@prisma/client';
import Link from 'next/link';

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
                <th>Details</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product: product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <Link href={`/products/${product.id}`}>Detail</Link>
                </tr>
                ))}
            </tbody>
        </table>

    )
}


