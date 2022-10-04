import { style } from "./ReactStack.css"
import { reactLogo } from "../../assets/Images"
import { stack } from "./stack"

export const ReactStack = ({ className }: { className: string }) => {
  return (
    <div css={style} className={className}>
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
  )
}
