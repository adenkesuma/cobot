"use client"

import Image from "next/image"
import {
  useOrganization,
  useOrganizationList
} from "@clerk/nextjs"

import { cn } from "@/lib/utils"

interface ItemProps {
  id: string
  name: string
  imageUrl: string
}

export const Item = ({
  id,
  name,
  imageUrl
} : ItemProps ) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const handleImageClick = () => {
    if (!setActive) return

    setActive({ organization: id })
  }

  return (
    <div className="aspect-square relative">
      <Image 
        src={imageUrl}
        alt={name}
        fill
        onClick={handleImageClick}
        className={cn("rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-100", isActive && "opacity-100")}
      />
    </div>
  )
}
