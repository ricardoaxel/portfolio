import { style } from "./ReactStack.css"
import { reactLogo } from "../../assets/Images"

const stack = {
  react: [
    "Hooks",
    "Styled Components",
    "Functional Components",
    "Component Life Cycle",
    "useContext",
    "Props",
    "State",
    "Custom hooks",
    "Virtual DOM",
    "HOC's",
  ],
  reactJS: ["create-react-app", "React Router"],
  reactNative: ["Expo", "StyleSheet", "React Navigation", "React CLI"],
}

export const ReactStack = ({ children, className, id }) => {
  return (
    <>
      <div css={style} className={className} id={id}>
        <h1>React Stack</h1>

        <ul className="stackList">
          {stack.react.map((tec, index) => (
            <li key={index}>
              <img src={reactLogo} alt="" />
              {tec}
            </li>
          ))}
        </ul>
        <div id="bottomSec">
          <div className="botsubSec">
            <h2>ReactJS</h2>
            <ul className="stackList leftList">
              {stack.reactJS.map((tec, index) => (
                <li key={index}>
                  <img src={reactLogo} alt="" />
                  {tec}
                </li>
              ))}
            </ul>
          </div>
          <div className="botsubSec">
            <h2>React Native</h2>
            <ul className="stackList leftList">
              {stack.reactNative.map((tec, index) => (
                <li key={index}>
                  <img src={reactLogo} alt="" />
                  {tec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
