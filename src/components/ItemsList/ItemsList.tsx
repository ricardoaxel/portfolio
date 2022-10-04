import { style } from "./ItemsList.css"
import { TechType } from "../../interfaces/generalInterfaces"

interface Props {
  stack: TechType[]
  className?: string
}

export const ItemsList = ({ stack, className }: Props) => {
  return (
    <ul css={style} className={className}>
      {stack.map((tec, index) => (
        <li key={index}>
          <div>
            <div className="imgContainer">
              <img src={tec.logo} alt={`${index}`} />
            </div>
            {tec.name}
          </div>
        </li>
      ))}
    </ul>
  )
}
