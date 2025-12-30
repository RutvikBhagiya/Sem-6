"use client"
import React from 'react'
import { DeleteUserAction } from '../actions/DeleteUserAction'

function DeleteButton({ id }: { id: number }) {
  return (
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={() => DeleteUserAction(id)}
    >
      Delete
    </button>
  )
}

export default DeleteButton
