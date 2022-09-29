import { css, Global } from "@emotion/react"
import { Style } from "./GeneralLayout.css"

const cardCss = {
  self: css({
    width: "100%",
    height: "100vh",
    backgroundColor: "#181818",
    color: "#8758FF",
  }),
}
export const GeneralLayout = ({ children }) => {
  return (
    <>
      <Global styles={Style} />
      <div css={cardCss.self}>{children}</div>
    </>
  )
}
