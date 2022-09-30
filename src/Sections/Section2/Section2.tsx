import { ParallaxLayer } from "@react-spring/parallax"
import { CardContainer, ReactStack } from "../../components"
import { style } from "./Section2.css"
import { FrontendDevTools } from "../../components/FrontendDevTools/FrontendDevTools"
export const Section2 = () => {
  return (
    <div css={style}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          display: "flex",
          // background: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContainer className={"card2"}>
          <ReactStack />
        </CardContainer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: "flex",
          // background: "red",
          alignItems: "center",
        }}
      >
        <CardContainer className={"smallcards"} id={"card1"}>
          {/* asdasd
          <ul>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
            <li>asdads</li>
          </ul> */}
          <FrontendDevTools />
        </CardContainer>
        <CardContainer className={"smallcards "} id={"card3"}>
          Card 3
        </CardContainer>
      </ParallaxLayer>
    </div>
  )
}
