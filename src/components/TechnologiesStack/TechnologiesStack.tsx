import { style } from "./TechnologiesStack.css"
import { ItemsList } from ".."
import { stack } from "./stack"
export const TechnologiesStack = ({ className }: { className: string }) => {
  return (
    <div css={style} className={className}>
      {/*  Technologies */}
      <h2>Tecnologies</h2>
      <ItemsList stack={stack.technologies} />

      {/*  Other tools */}
      <h2>Other Tools</h2>
      <ItemsList stack={stack.other} />
    </div>
  )
}
