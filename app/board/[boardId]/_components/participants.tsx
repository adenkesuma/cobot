const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow">
      LIst of users
    </div>
  )
}

export default Participants

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow w-28" />
  )
}
