import { style } from "./TechnologiesStack.css"
import {
  AxiosLogo,
  apiLogo,
  bootstrapLogo,
  cypressLogo,
  emotionLogo,
  eslintLogo,
  googlemapsLogo,
  jestLogo,
  jspdfLogo,
  materialuiLogo,
  npmLogo,
  plotlyLogo,
  postmanLogo,
  prettierLogo,
  rbdndLogo,
  rechartsLogo,
  reactLogo,
  reduxLogo,
  sassLogo,
  webpackLogo,
} from "../../assets/Images"

const stack = {
  technologies: [
    {
      name: "HTML5",
      logo: AxiosLogo,
    },
    {
      name: "CSS",
      logo: AxiosLogo,
    },
    {
      name: "TypeScript",
      logo: AxiosLogo,
    },
    {
      name: "JavaScript",
      logo: AxiosLogo,
    },
    {
      name: "JSON",
      logo: AxiosLogo,
    },
  ],
  other: [
    {
      name: "Git",
      logo: AxiosLogo,
    },
    {
      name: "Github",
      logo: AxiosLogo,
    },
    {
      name: "NodeJS",
      logo: AxiosLogo,
    },
    {
      name: "Firebase",
      logo: AxiosLogo,
    },
    {
      name: "Firebase",
      logo: AxiosLogo,
    },
    {
      name: "Basic backend understanding",
      logo: AxiosLogo,
    },
    {
      name: "Ubuntu",
      logo: AxiosLogo,
    },
  ],
}

export const TechnologiesStack = ({ children, className, id }) => {
  return (
    <>
      <div css={style} className={className} id={id}>
        <h2>Tecnologies</h2>
        <ul className="stackList">
          {stack.technologies.map((tec, index) => (
            <li key={index}>
              <div>
                <img src={tec.logo} />
                {tec.name}
              </div>
            </li>
          ))}
        </ul>
        {/*  */}
        <h2>Other Tools</h2>
        <ul className="stackList">
          {stack.other.map((tec, index) => (
            <li key={index}>
              <div>
                <img src={tec.logo} />
                {tec.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
