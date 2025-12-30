import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </head>
      <body>
        <div>
            <div className="btn btn-primary m-3"><Link className="text-white" href={"/"}>Home</Link></div>
            <div className="btn btn-success m-3"><Link className="text-white" href={"/users"}>Users List</Link></div>
            <div className="btn btn-dark m-3"><Link className="text-white" href={"/users/add"}>Add User</Link></div>
        </div>
        {children}
      </body>
    </html>
  );
}
