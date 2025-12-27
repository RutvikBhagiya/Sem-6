import pool from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { task } from "@prisma/client";
import Link from "next/link";

export default async function Tasks(){
    try{
        // const [tasks] : any = await pool.query("Select * From Task");
        const tasks : any = await prisma.task.findMany();
        
        if(!tasks){
            return (
                <p style={{ color: "red" }}>
                    Tasks not loaded.
                </p>
            )
        }

        return(
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>User Id</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task : task)=>(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.isCompleted}</td>
                            <td>{task.userId}</td>
                            <Link href={`/tasks/${task.id}`}>Detail</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
        
    }
    catch(error){
        console.log("Database error:",error);
        <p style={{ color: "red" }}>
            Something went wrong while fetching the tasks.
        </p>
    }
}