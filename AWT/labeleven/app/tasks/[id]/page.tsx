import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Task({params}:{params:{id:string}}) {
    const {id} = await params;

    try{
        const task = await prisma.task.findUnique({
            where : {id : Number(id)}
        })
        
        if(!task){
            return(
                <p style={{ color: "red" }}>
                    Task Not Exist.
                </p>
            )
        }

        return(
            <>
                <table border={1} cellPadding={10}>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{task.id}</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{task.title}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{task.description}</td>
                    </tr>
                    <tr>
                        <th>Completed</th>
                        <td>{task.isCompleted}</td>
                    </tr>
                    <tr>
                        <th>User Id</th>
                        <td>{task.userId}</td>
                    </tr>
                    </tbody>
                </table>
                <Link href={"/tasks"} className="m-5">Back</Link>
            </>
        )
    }catch(error){
        console.log("Database error:",error);
        return(
            <p style={{ color: "red" }}>
                Something went wrong while fetching the tasks.
            </p>
        )
        
    }
}