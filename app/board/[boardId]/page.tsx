import Canvas from "./_components/canvas"

interface BoardDetailPageProps {
  params: {
    boardId: string
  }
}

const BoardDetailPage = ({
  params
} : BoardDetailPageProps) => {
  return (
    <Canvas boardId={params.boardId} />
  )
}

export default BoardDetailPage
