import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

async function DetailUser({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const data = await prisma.users.findFirst({
    where: { UserID: Number(id) },
    include: {
      tasks: true,
    },
  })

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">User Details</h4>
        </div>

        <div className="card-body">
          <h5 className="card-title">{data?.UserName}</h5>

          <hr />

          <h6 className="text-muted mb-3">Tasks</h6>

          {data?.tasks && data.tasks.length > 0 ? (
            <ul className="list-group mb-3">
              {data.tasks.map((t: any) => (
                <li
                  key={t.TaskID}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {t.TaskTitle}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No tasks assigned</p>
          )}

          <Link href="/users" className="btn btn-outline-secondary">
            ← Back to Users
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailUser
