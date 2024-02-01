const EmptyFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <h1 className="text-gray-200 font-bold uppercase text-3xl">No Data</h1>

      <h2 className="mt-6 font-semibold text-2xl">
        No favorite boards!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  )
}

export default EmptyFavorites 
