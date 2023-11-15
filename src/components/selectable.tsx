import { ReactNode } from 'react'

type SelectableProps = {
  children: ReactNode
  active: boolean
}

function Selectable({ children, active }: SelectableProps) {
  return (
    <span
      className={`cursor-pointer rounded-2xl bg-neutral-300 px-5 py-2 transition ${
        active ? 'bg-stone-400' : 'hover:bg-stone-400'
      }`}
    >
      {children}
    </span>
  )
}

export default Selectable
