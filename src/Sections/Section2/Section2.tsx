import { ParallaxLayer } from "@react-spring/parallax"
import { CardContainer, ReactStack } from "../../components"
import { style } from "./Section2.css"
import { FrontendDevTools } from "../../components/FrontendDevTools/FrontendDevTools"
import { TechnologiesStack } from "../../components/TechnologiesStack/TechnologiesStack"
import { Size } from "../../hooks/useWindowSize"
import { dimensions, menuHeight } from "../../utils"
export const Section2 = ({ windowSize }: { windowSize: Size }) => {
  let isPC = windowSize.width > dimensions.tablet
  let factor =
    windowSize.width > dimensions.tablet
      ? 1
      : windowSize.width > dimensions.phone
      ? 1.5
      : 1.75
  return (
    <div css={style}>
      {/* Card 1: Technologies */}
      <ParallaxLayer
        offset={1}
        speed={isPC ? 2 : 2}
        factor={factor}
        style={{
          display: "flex",
          marginLeft: "3%",
          // background: "red",
          width: isPC ? "25%" : "94%",
          marginRight: isPC ? "0%" : "3%",
          alignItems: isPC ? "center" : "flex-start",
          position: "absolute",
          marginTop: isPC ? "0rem" : menuHeight,
        }}
      >
        <CardContainer className={"card1"}>
          <TechnologiesStack className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>

      {/* Card 2: React Stack */}
      <ParallaxLayer
        offset={1}
        speed={isPC ? 0.75 : 2}
        factor={factor}
        style={{
          display: "flex",
          width: isPC ? "38.5%" : "94%",
          marginLeft: isPC ? "31%" : "3%",
          alignItems: isPC ? "center" : "center",
          position: "absolute",
          marginTop: isPC ? "0rem" : menuHeight,
        }}
      >
        <CardContainer className={"card2"}>
          <ReactStack className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>

      {/* Card 3: Frontend DevTools*/}
      <ParallaxLayer
        offset={1}
        speed={isPC ? 2 : 2}
        factor={factor}
        style={{
          display: "flex",
          width: isPC ? "25%" : "94%",
          marginLeft: isPC ? "72%" : "3%",
          alignItems: isPC ? "center" : "flex-end",
          position: "absolute",
          marginTop: isPC ? "0rem" : menuHeight,
        }}
      >
        <CardContainer className={"card3"}>
          <FrontendDevTools className={"contentArea"} />
        </CardContainer>
      </ParallaxLayer>
    </div>
  )
}
