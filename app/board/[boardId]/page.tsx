import Canvas from "./_components/canvas"
import Room from "@/components/room"
import CanvasLoading from "./_components/canvas-loading"

interface BoardDetailPageProps {
  params: {
    boardId: string
  }
}

const BoardDetailPage = ({
  params
} : BoardDetailPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  )
}

export default BoardDetailPage
