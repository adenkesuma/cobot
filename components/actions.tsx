"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { 
  Link2, 
  Trash2 
} from "lucide-react"

import { useApiMutation } from "@/hook/use-api-mutation"
import { api } from "@/convex/_generated/api"

interface ActionsProps {
  children: React.ReactNode
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"] 
  id: string
  title: string
}

const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title
} : ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove)

  const onCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
    .then(() => toast.success("Link copied"))
    .catch(() => toast.error("Failed to copy link"))
  }

  const onDelete = () => {
    mutate({ id })
    .then(() => toast.success("Board deleted"))  
    .catch(() => toast.error("Failed to delete board"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem 
          className="p-3 cursor-pointer"
          onClick={onCopyLink}
        >
          <Link2 className="mr-2 h-4 w-4" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="p-3 cursor-pointer"
          onClick={onDelete}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Actions
