import { users } from '@/lib/generated/prisma/browser'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import DeleteButton from '../ui/DeleteButton'

async function UserList() {
  const data = await prisma.users.findMany()

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">User List</h5>
        </div>

        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>User Name</th>
                <th className="text-center">Details</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((u: users) => (
                <tr key={u.UserID}>
                  <td className="align-middle">{u.UserName}</td>

                  <td className="text-center align-middle">
                    <Link
                      href={`/users/${u.UserID}`}
                      className="btn btn-sm btn-outline-info"
                    >
                      View
                    </Link>
                  </td>

                  <td className="text-center align-middle">
                    <DeleteButton id={u.UserID} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserList
