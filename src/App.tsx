// import "./styles.css"
import image from "./assets/react.jpg"
import svgex from "./assets/exampleSVG.svg"
import { ClikCounter } from "./assets/ClikCounter"
import { css } from "@emotion/react"

const cardCss = {
  self: css({
    backgroundColor: "#cf2a2a",
    border: "1px solid #eee",
    borderRadius: "0.5rem",
    padding: "1rem",
  }),
}

export const App = () => {
  return (
    <div css={cardCss.self}>
      <h1>
        Hellssdfso Reacti - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClikCounter />
      <img src={image} alt={"asdad"} />
      dsfsfs
      <img src={svgex} alt={"asdad"} />
    </div>
  )
}
