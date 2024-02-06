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
  Pencil, 
  Trash2 
} from "lucide-react"

import { useApiMutation } from "@/hook/use-api-mutation"
import { api } from "@/convex/_generated/api"
import ConfirmModal from "./confirm-modal"
import { Button } from "./ui/button"
import { useRenameModal } from "@/store/use-rename-modal"

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
  const { onOpen } = useRenameModal()
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
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Rename
        </DropdownMenuItem>

        <ConfirmModal
          header="Delete Board?"
          description="This will delete the board and all the of it's contents"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Actions
