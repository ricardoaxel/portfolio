import { style } from "./CardContainer.css"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  cardN: number
}

export const CardContainer = ({ children, className, cardN }: Props) => {
  return (
    <>
      <div css={style()} className={className}>
        {children}
      </div>
    </>
  )
}
