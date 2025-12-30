import { AddUserAction } from '@/app/actions/AddUserAction'
import React from 'react'

function AddUser() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Add New User</h5>
            </div>

            <div className="card-body">
              <form action={AddUserAction}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="UserName"
                    className="form-control"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="Password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Add User
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser
