import pool from "@/lib/db";

export default async function UserId({params} : {params : {id : string}}){
    const {id} = await params;

    try{
        const [users] : any = await pool.query("Select * from User Where UserId = ?",[id]);
    

        if(users.length === 0){
            return (
                <p style={{ color: "red" }}>
                    User not exist.
                </p>
            );
        }
        const user = users[0];
        return (
            <table border={1} cellPadding={10}>
                <tbody>
                <tr>
                    <th>ID</th>
                    <td>{user.UserId}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{user.UserName}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{user.Password}</td>
                </tr>
                </tbody>
        </table>
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