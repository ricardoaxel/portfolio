import { css, Global } from "@emotion/react"
import { Style } from "./GeneralLayout.css"
import { ReactNode } from "react"

const cardCss = {
  self: css({
    width: "100%",
    height: "100vh",
    backgroundColor: "#181818",
    color: "white",
  }),
}

interface Props {
  children: ReactNode
}
export const GeneralLayout = ({ children }: Props) => {
  return (
    <>
      <Global styles={Style} />
      <div css={cardCss.self}>{children}</div>
    </>
  )
}
