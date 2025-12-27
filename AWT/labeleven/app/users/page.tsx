import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { user } from "@prisma/client";
import Link from "next/link";

export default async function Users(){
    const users = await prisma.user.findMany();

    return(
        <table border = {1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Password</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user:user)=>(
                    <tr key = {user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <Link href={`/users/${user.id}`}>Detail</Link>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}