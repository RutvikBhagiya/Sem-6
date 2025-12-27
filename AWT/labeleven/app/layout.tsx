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
        <div className="row">
            <div className="col m-2">
              <Link href={'/'}>Home</Link>
            </div>
            <div className="col m-2">
              <Link href={'/products'}>Products</Link>
            </div>
            <div className="col m-2">
              <Link href={'/tasks'}>Tasks</Link>
            </div>
            <div className="col m-2">
              <Link href={'/users'}>Users</Link>
            </div>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
