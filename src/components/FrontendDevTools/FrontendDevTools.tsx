import { style } from "./FrontendDevTools.css"
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

const stack = [
  { name: "axios", logo: AxiosLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "API Fetch", logo: apiLogo },
  { name: "ESLint", logo: eslintLogo },
  { name: "Prettier", logo: prettierLogo },
  { name: "SASS", logo: sassLogo },
  { name: "Material UI", logo: materialuiLogo },
  { name: "Emotion", logo: emotionLogo },
  { name: "Webpack", logo: webpackLogo },
  { name: "Jest", logo: jestLogo },
  { name: "Cypress", logo: cypressLogo },
  { name: "PostMan", logo: postmanLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "npm", logo: npmLogo },
  { name: "Plotly", logo: plotlyLogo },
  { name: "Recharts", logo: rechartsLogo },
  { name: "Google Maps", logo: googlemapsLogo },
  { name: "jsPDF", logo: jspdfLogo },
  { name: "react-beautiful-dnd", logo: rbdndLogo },
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
                <div className="imgContainer">
                  <img src={tec.logo} />
                </div>
                {tec.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
