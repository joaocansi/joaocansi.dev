import { ReactNode } from 'react'

type SelectableProps = {
  children: ReactNode
  active: boolean
  onClick: () => void
}

function Selectable({ children, active, onClick }: SelectableProps) {
  return (
    <span
      className={`cursor-pointer rounded-2xl bg-neutral-300 px-5 py-2 transition ${
        active ? 'bg-stone-400' : 'hover:bg-stone-400'
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default Selectable
