import { Button } from "@/components/ui/button"

const EmptyBoards = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <h1 className="text-gray-200 font-bold uppercase text-3xl">No Data</h1>

      <h2 className="mt-6 font-semibold text-2xl">
        Create your first boards!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button>
          Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards 
