import { style } from "./MenuBtn.css"
import { BsCodeSlash } from "react-icons/bs"
import { IconType } from "react-icons"
import { ReactNode } from "react"

interface Props {
  className?: string
  value: string
  onClick: () => void
  icon: ReactNode
}

export const MenuBtn = ({ value, onClick, icon }: Props) => {
  return (
    <button css={style} onClick={onClick} value={value}>
      {icon}
      {value}
    </button>
  )
}
