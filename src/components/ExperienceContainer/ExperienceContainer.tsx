import { style } from "./ExperienceContainer.css"
import { useState } from "react"
import AnimateHeight from "react-animate-height"
import { IoIosArrowDown } from "react-icons/io"
import { CgEditBlackPoint } from "react-icons/cg"

interface Props {
  className?: string
}

export const ExperienceContainer = ({ className }: Props) => {
  const [openDetail, setOpenDetail] = useState(false)
  return (
    <li css={style(openDetail)} className={className}>
      <AnimateHeight duration={500} height={openDetail ? "auto" : 45}>
        <div id="topSec">
          <div id="leftSide">
            <h3>React Developer</h3>
            <p id="company">Let's Go Eat - Lawrenceville, GA</p>
          </div>
          <div id="rightSide">
            <p> 2022-07 - Present</p>
          </div>
        </div>

        <div id="content">
          <div id="description" className="subSideContent">
            <h4>Achievements</h4>
            <ul>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
              <li>
                <CgEditBlackPoint />
                Developed a React Native application for customer orders
              </li>
            </ul>
          </div>
          <div id="projects" className="subSideContent">
            <h4>Projects</h4>
            <ul>
              <li>
                <h5>LINDA</h5>
                <p>Handled photo management with help of react-image-picker</p>
              </li>
              <li>Handled photo management with help of react-image-picker</li>
            </ul>
          </div>
        </div>

        <button onClick={() => setOpenDetail(!openDetail)}>
          <IoIosArrowDown />
        </button>
      </AnimateHeight>
    </li>
  )
}
