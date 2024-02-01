"use client"

import Link from "next/link"
import { Poppins } from "next/font/google"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { Star, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

const OrgSidebar = () => {
  const searchParams = useSearchParams()
  const favorites = searchParams.get("favorites")

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-52 px-5 pt-5 border-r">
      <Link href="/">
        <div className="flex items-end gap-x-2">
          <span className="font-bold text-blue-600 text-2xl uppercase">Cobot</span> 
          <span className={cn("font-semibold text-sm mb-[2px]", font.className)}>Board</span>
        </div>
      </Link>

      <OrganizationSwitcher 
        hidePersonal
        appearance = {{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            }
          }
        }}
      />

      <div className="space-y-1 w-full">
        <Button 
          asChild
          className="font-normal w-full justify-start"
          variant={favorites ? "ghost" : "secondary"}
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span>Team boards</span>
          </Link>
        </Button>
        <Button 
          asChild
          className="font-normal w-full justify-start"
          variant={favorites ? "secondary" : "ghost"}
        >
          <Link href={{
            pathname: "/",
            query: { favorites: true }
          }}>
            <Star className="h-4 w-4 mr-2" />
            <span>Favorite boards</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default OrgSidebar
