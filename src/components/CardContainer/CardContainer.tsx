import { style } from "./CardContainer.css"

export const CardContainer = ({ children, className, id }) => {
  return (
    <>
      <div css={style} className={className} id={id}>
        {children}
      </div>
    </>
  )
}
