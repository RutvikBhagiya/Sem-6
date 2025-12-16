import React from 'react'

export default function ClientLayout({children} : {children:React.ReactNode}) {
  return (
        <main>
            <h1 style={{backgroundColor:"rgba(169, 196, 36, 0.33)"}}>Client Layout</h1>
            <div style={{padding:20,margin:10 ,backgroundColor:"rgba(161, 133, 206, 0.33)"}}>
                {children}
            </div>
        </main>
  )
}

    