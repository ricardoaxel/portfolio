import { ParallaxLayer } from "@react-spring/parallax"
import { CardContainer, ProjectsContainer, ReactStack } from "../../components"
import { style } from "./Section3.css"
import { FrontendDevTools } from "../../components/FrontendDevTools/FrontendDevTools"
import { TechnologiesStack } from "../../components/TechnologiesStack/TechnologiesStack"
import { Size } from "../../hooks/useWindowSize"
import { dimensions } from "../../utils"
import { ExperienceContainer } from "../../components/ExperienceContainer/ExperienceContainer"
import { experiences } from "./experiences"

export const Section3 = ({ windowSize }: { windowSize: Size }) => {
  let isPC = windowSize.width > dimensions.tablet
  let factor =
    windowSize.width > dimensions.tablet
      ? 1
      : windowSize.width > dimensions.phone
      ? 1.5
      : 1.75
  return (
    <div css={style}>
      <h2>Work experience</h2>
      <ul id="experienceList">
        {experiences.map((experience, index) => (
          <ExperienceContainer
            key={index}
            title={experience.title}
            company={experience.company}
            achievements={experience.achievements}
            projects={experience.projects}
            date={experience.date}
          />
        ))}
      </ul>

      {/* <ProjectsContainer /> */}
    </div>
  )
}
