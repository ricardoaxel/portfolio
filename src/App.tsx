import "./styles.css"
import image from "./assets/react.jpg"
import svgex from "./assets/exampleSVG.svg"
import { ClikCounter } from "./assets/ClikCounter"
export const App = () => {
  return (
    <>
      <h1>
        Hello Reacti - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClikCounter />
      <img src={image} alt={"asdad"} />
      dsfsfs
      <img src={svgex} alt={"asdad"} />
    </>
  )
}
