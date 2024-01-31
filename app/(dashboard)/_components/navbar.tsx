"use client"

import { UserButton } from "@clerk/nextjs"
import Search from "./search"

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <Search />
      </div>

      <UserButton />
    </nav>
  )
}

export default Navbar
