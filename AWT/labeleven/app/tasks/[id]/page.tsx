import pool from "@/lib/db";

export default async function Task({params}:{params:{id:string}}) {
    const {id} = await params;

    try{
        const [tasks]:any = await pool.query("Select * From Task Where TaskId=?",[id]);
        
        if(tasks.length === 0 ){
            return(
                <p style={{ color: "red" }}>
                    Task Not Exist.
                </p>
            )
        }

        const task = tasks[0];
        return(
            <table border={1} cellPadding={10}>
                <tbody>
                <tr>
                    <th>ID</th>
                    <td>{task.TaskId}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{task.TaskTitle}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{task.TaskDescription}</td>
                </tr>
                <tr>
                    <th>Completed</th>
                    <td>{task.IsCompleted}</td>
                </tr>
                <tr>
                    <th>User Id</th>
                    <td>{task.UserId}</td>
                </tr>
                </tbody>
            </table>
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