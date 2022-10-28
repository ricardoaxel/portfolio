import { style } from "./ExperienceContainer.css"
import { useState } from "react"
import AnimateHeight from "react-animate-height"
import { IoIosArrowDown } from "react-icons/io"
import { CgEditBlackPoint } from "react-icons/cg"

type project = {
  title: string
  description: string
}

interface Props {
  className?: string
  key: string | number
  achievements: string[]
  projects: project[]
  title: string
  company: string
  date: string
}

export const ExperienceContainer = ({
  className,
  key,
  achievements,
  projects,
  title,
  company,
  date,
}: Props) => {
  const [openDetail, setOpenDetail] = useState(false)
  return (
    <li css={style(openDetail)} key={key} className={className}>
      <AnimateHeight duration={500} height={openDetail ? "auto" : 45}>
        <div id="topSec">
          <div id="leftSide">
            <h3>{title}</h3>
            <p id="company">{company}</p>
          </div>
          <div id="rightSide">
            <p>{date}</p>
          </div>
        </div>

        <div id="content">
          <div id="description" className="subSideContent">
            <h4>Achievements</h4>
            <ul>
              {achievements.map((achievement) => (
                <li key={achievement}>
                  <CgEditBlackPoint />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div id="projects" className="subSideContent">
            <h4>Projects</h4>
            <ul>
              {projects.map((project) => (
                <li key={project.title}>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </li>
              ))}
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
