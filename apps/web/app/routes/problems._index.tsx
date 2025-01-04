import { useLoaderData } from "@remix-run/react"

export async function loader() {
  const response = await fetch(process.env.NESTJS_API_URL + "/problems")
  const problems = await response.json()
  return { problems }
}

export default function Problems() {
  const { problems } = useLoaderData()

  return (
    <div className="w-full flex flex-col h-full p-12">
      <h1>List of problems</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem._id}>{problem.title}</li>
        ))}
      </ul>
    </div>
  )
}
