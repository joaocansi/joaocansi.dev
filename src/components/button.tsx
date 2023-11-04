"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  link?: LinkProps;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  if (link) {
    return (
      <Link {...link} className="bg-neutral-300 transition-colors hover:bg-stone-400 text-sm px-12 py-6 rounded-3xl min-w-[300px] text-center">
        {children}
      </Link>
    )
  }
  return (
    <button className="bg-neutral-300 transition-colors hover:bg-stone-400 text-sm px-12 py-6 rounded-3xl min-w-[300px] text-center">
      {children}
    </button>
  )
}

export default Button;