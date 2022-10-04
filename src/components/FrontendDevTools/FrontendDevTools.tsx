import { style } from "./FrontendDevTools.css"
import { ItemsList } from ".."
import { stack } from "./stack"

export const FrontendDevTools = ({ className }: { className: string }) => {
  return (
    <>
      <div css={style} className={className}>
        <h2>Frontend Development Tools</h2>
        <ItemsList stack={stack} />
      </div>
    </>
  )
}
