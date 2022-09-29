import { GeneralLayout } from "./Layouts/GeneralLayout"
import { MainSection } from "./Sections/MainSection/MainSection"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { me } from "./assets/Images"

export const App = () => {
  return (
    <GeneralLayout>
      <Parallax pages={4}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "cover",
            position: "absolute",
            backgroundPosition: " center",
            filter: "grayscale(100%) blur(0px)",
          }}
          factor={2}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              opacity: 0.75,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer speed={2} offset={0} factor={1}>
          <MainSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h1>Layer2</h1>
        </ParallaxLayer>
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
