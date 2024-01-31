"use client"

import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4 p-5 bg-green-500">
      navbar
      <div className="hidden lg:flex lg:flex-1 bg-yellow-600">
        search
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar
