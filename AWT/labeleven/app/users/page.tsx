import pool from "@/lib/db";

export default async function Users(){
    const [users] :any = await pool.query("Select * From User")
    return(
        <table border = {1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Password</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user:any)=>(
                    <tr key = {user.UserId}>
                        <td>{user.UserId}</td>
                        <td>{user.UserName}</td>
                        <td>{user.Password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}