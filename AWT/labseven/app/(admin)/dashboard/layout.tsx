import React from 'react'

export default function AdminLayout({children} : {children:React.ReactNode}) {
  return (
        <main>
            <h1 style={{backgroundColor:"rgba(216, 216, 107, 0.33)"}}>Admin Layout</h1>
            <div style={{padding:20,margin:10 ,backgroundColor:"rgba(194, 76, 202, 0.33)"}}>
                {children}
            </div>
        </main>
  )
}

    