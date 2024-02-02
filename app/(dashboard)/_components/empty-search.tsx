import Image from "next/image"

const EmptySearch = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Image 
        src="empty-search.svg"
        alt="empty search"
        width={200}
        height={200}
      />

      <h2 className="mt-6 font-semibold text-2xl">
        No result found!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  )
}

export default EmptySearch
