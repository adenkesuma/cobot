"use client"

import { cn } from "@/lib/utils"

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

const NewBoardButton = ({
  orgId,
  disabled
} : NewBoardButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {}}
      className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6")}
    >
      <div />
    </button>
  )
}

export default NewBoardButton
