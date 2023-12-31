import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  link?: LinkProps
  text?: string
}

function Button({ children, link }: ButtonProps) {
  if (link) {
    return (
      <Link
        {...link}
        className="rounded-3xl bg-neutral-300 px-12 py-6 text-center text-sm transition-colors hover:bg-stone-400 max-xl:text-xs max-sm:px-6"
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      type="button"
      className="min-w-[300px] rounded-3xl bg-neutral-300 px-12 py-6 text-center text-sm transition-colors hover:bg-stone-400 max-xl:text-xs"
    >
      {children}
    </button>
  )
}

export default Button
