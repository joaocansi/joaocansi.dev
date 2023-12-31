import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ placeholder, name, className, id, ...props }: InputProps) {
  return (
    <div>
      <label
        className="cursor-pointer text-xs font-bold text-white"
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        className={`w-full px-3 py-4 text-xs outline-none ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
