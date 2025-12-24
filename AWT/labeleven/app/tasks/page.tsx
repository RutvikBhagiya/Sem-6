import pool from "@/lib/db";

export default async function Tasks(){
    try{
        const [tasks] : any = await pool.query("Select * From Task");

        if(tasks.length === 0){
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
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task : any)=>(
                        <tr key={task.TaskId}>
                            <td>{task.TaskId}</td>
                            <td>{task.TaskTitle}</td>
                            <td>{task.TaskDescription}</td>
                            <td>{task.IsCompleted}</td>
                            <td>{task.UserId}</td>
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