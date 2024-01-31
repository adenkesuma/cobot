import { Plus } from "lucide-react"
import { OrganizationProfile } from "@clerk/nextjs"

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl">
          <Plus className="w-4 h-4 mr-2"/>
          <span>Invite members</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton
