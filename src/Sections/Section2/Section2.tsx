import { ParallaxLayer } from "@react-spring/parallax"
import { CardContainer, ReactStack } from "../../components"
import { style } from "./Section2.css"
import { FrontendDevTools } from "../../components/FrontendDevTools/FrontendDevTools"
import { TechnologiesStack } from "../../components/TechnologiesStack/TechnologiesStack"
export const Section2 = () => {
  return (
    <div css={style}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          display: "flex",
          width: "38.5%",
          marginLeft: "31%",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <CardContainer className={"card2"}>
          <ReactStack className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: "flex",
          width: "25%",
          marginLeft: "3%",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <CardContainer>
          <TechnologiesStack className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: "flex",
          width: "25%",
          alignItems: "center",
          marginLeft: "72%",
          position: "absolute",
        }}
      >
        <CardContainer>
          <FrontendDevTools className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>
    </div>
  )
}
