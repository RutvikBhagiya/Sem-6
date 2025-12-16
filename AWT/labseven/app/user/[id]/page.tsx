import React from 'react'

export default async function UserPage({params} : {params:{id:string;};}) {
  return (
    <div>
      <h1 className='h1'>User: {params.id}</h1>
    </div>
  )
}

 
