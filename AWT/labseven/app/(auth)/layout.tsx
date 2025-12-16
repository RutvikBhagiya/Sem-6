import React from 'react'

export default function AuthLayout({children} : {children:React.ReactNode}) {
  return (
        <main>
            <h1 style={{backgroundColor:"#6d85"}}>Auth Layout</h1>
            <div style={{padding:20,margin:10 ,backgroundColor:"rgba(161, 133, 206, 0.33)"}}>
                {children}
            </div>
        </main>
  )
}

    