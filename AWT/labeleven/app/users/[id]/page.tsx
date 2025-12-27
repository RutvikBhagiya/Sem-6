import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function UserId({params} : {params : {id : string}}){
    const {id} = await params;

    try{
        const user = await prisma.user.findUnique(
            {where:{id:Number(id)}}
        )
    

        if(!user){
            return (
                <p style={{ color: "red" }}>
                    User not exist.
                </p>
            );
        }

        return (
            <>
                <table border={1} cellPadding={10}>
                <tbody>
                <tr>
                    <th>ID</th>
                    <td>{user.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{user.password}</td>
                </tr>
                </tbody>
            </table>
            <Link href={"/users"} className="m-5">Back</Link>
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