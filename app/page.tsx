import { UserButton } from "@clerk/nextjs"

const Home = () => {
  return (
    <div>
      <h1>Home authenticated</h1>

      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default Home
