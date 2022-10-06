import { style } from "./MainSection.css"
import { reactLogo } from "../../assets/Images"
import { Size } from "../../hooks/useWindowSize"

export const MainSection = ({ windowSize }: { windowSize: Size }) => {
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

          <p id="description">
            React Native & Web Developer with around 5 years of experience in
            designing and developing user interfaces. <br /> <br />
            Passionate about transforming UI/UX ideas into code.
          </p>
        </div>
      </div>
    </>
  )
}
