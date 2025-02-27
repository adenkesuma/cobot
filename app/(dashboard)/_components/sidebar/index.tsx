import { List } from "./list"
import { NewButton } from "./new-button"

const Sidebar = () => {
  return (
    <aside className="fixed z-1 left-0 bg-black h-full w-16 flex p-3 flex-col gap-y-4">
      <NewButton />
      <List />
    </aside>
  )
}

export default Sidebar
