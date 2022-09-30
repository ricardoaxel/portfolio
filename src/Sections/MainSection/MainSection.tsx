import { style } from "./MainSection.css"
import { reactLogo } from "../../assets/Images"

export const MainSection = () => {
  return (
    <>
      <div css={style}>
        <div className="centerContainer">
          <h3>Hi, my name is Ricardo Axel</h3>
          <p id="im">{`I'm a `}</p>
          <div id="reactSec">
            <img id="reactLogo" src={reactLogo} alt="" />
            <h1>React Developer</h1>
          </div>
        </div>
      </div>
    </>
  )
}
