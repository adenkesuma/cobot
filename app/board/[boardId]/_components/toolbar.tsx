const Toolbar = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipsis</div>
      </div>

      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  )
}

export default Toolbar

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col gap-y-4 w-14 h-96 bg-white shadow rounded-md" />
  )
}
