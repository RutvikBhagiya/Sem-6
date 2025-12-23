import Link from 'next/link'

async function StudentList() {
  const response = await fetch(
    'https://667198fde083e62ee43c493d.mockapi.io/Students/students')

  if (!response.ok) {
    throw new Error('Failed to fetch students')
  }

  const students = await response.json()

  return (
    <div>
      <h1>Student List</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Enrollment No</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student:any) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.enrollmentNo}</td>
              <td>
                <Link href={`/students/${student.id}`}>
                  <button>View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
