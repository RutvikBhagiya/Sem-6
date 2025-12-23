
async function StudentDetail({ params }: { params: { id: string } }) {
  const { id } = await params

  const response = await fetch(
    `https://667198fde083e62ee43c493d.mockapi.io/Students/students/${id}`,
    { cache: 'no-store' }
  )

  if (!response.ok) {
    throw new Error('Student not found')
  }

  const student = await response.json()

  return (
    <div>
      <h1>Student Detail</h1>

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Phone No:</strong> {student.phoneNo}</p>
      <p><strong>Enrollment No:</strong> {student.enrollmentNo}</p>
    </div>
  )
}

export default StudentDetail
