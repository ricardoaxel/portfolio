import { GeneralLayout } from "./Layouts/GeneralLayout"
import { MainSection } from "./Sections/MainSection/MainSection"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { me } from "./assets/Images"
import { useRef } from "react"
import { Section2 } from "./Sections/Section2/Section2"

export const App = () => {
  const ref = useRef()
  return (
    <GeneralLayout>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "cover",
            position: "absolute",
            backgroundPosition: " center",
            filter: "grayscale(100%) blur(0px)",
          }}
          factor={2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div
            style={{
              backgroundColor: "#0e0b1880",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </ParallaxLayer>
        {/* Section 1 */}
        <ParallaxLayer speed={2} offset={0} factor={1}>
          <MainSection />
        </ParallaxLayer>
        {/* Section 2 */}

        <Section2 />

        {/*  */}
        <ParallaxLayer offset={2} speed={0.5}>
          <h1>Layer3</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <h1>Layer4</h1>
        </ParallaxLayer>
      </Parallax>
    </GeneralLayout>
  )
}
