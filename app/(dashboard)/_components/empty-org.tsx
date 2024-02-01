import { CreateOrganization } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className='text-3xl font-bold text-gray-200 uppercase'>
        Empty Organization
      </h1>

      <div className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
        <p className="text-muted-foreground text-sm">
          Create an organization ot get started
        </p>
      </div>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrg
  