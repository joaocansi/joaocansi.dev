import { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

function Textarea({
  placeholder,
  className,
  name,
  id,
  ...props
}: TextareaProps) {
  return (
    <div>
      <label
        className="cursor-pointer text-xs font-bold text-white"
        htmlFor={id}
      >
        {placeholder}
      </label>
      <textarea
        id={id}
        name={name}
        className={`w-full px-3 py-4 text-xs outline-none ${className}`}
        {...props}
      />
    </div>
  )
}

export default Textarea
