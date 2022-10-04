import { style } from "./CardContainer.css"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export const CardContainer = ({ children, className }: Props) => {
  return (
    <>
      <div css={style} className={className}>
        {children}
      </div>
    </>
  )
}
