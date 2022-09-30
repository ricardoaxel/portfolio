import { style } from "./FrontendDevTools.css"
import { reactLogo } from "../../assets/Images"

const stack = [
  "Axios",
  "Redux",
  "API Fetch",
  "ESLint",
  "Prettier",
  "Babel",
  "SASS",
  "Material UI",
  "Emotion",
  "Webpack",
  "Jest",
  "Cypress",
  "PostMan",
  "Bootstrap",
  "npm",
]

export const FrontendDevTools = ({ children, className, id }) => {
  return (
    <>
      <div css={style} className={className} id={id}>
        <h2>Frontend Development Tools</h2>

        <ul className="stackList">
          {stack.map((tec, index) => (
            <li key={index}>
              <div>
                <img src={reactLogo} alt="" />
                {tec}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
