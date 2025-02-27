"use client"

import Image from "next/image"
import { useOrganization } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hook/use-api-mutation"
import { toast } from "sonner"

const EmptyBoards = () => {
  const router = useRouter()
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.create)

  const handleBoard = () => {
    if (!organization) return

    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
    .then((id) => {
      toast.success("Board created!")
      router.push(`/board/${id}`)
    })
    .catch(() => {
      toast.error("Failed to create board!")
    })
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Image 
        src="note.svg"
        alt="empty board"
        width={200}
        height={200}
      />

      <h2 className="mt-6 font-semibold text-2xl">
        Create your first boards!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button disabled={pending} onClick={handleBoard}>
          Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards 
