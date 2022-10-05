import { GeneralLayout } from "./Layouts/GeneralLayout"
import { MainSection, Section2, Menu } from "./Sections"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { me } from "./assets/Images"
import { useRef, useState, useEffect } from "react"
import { useWindowSize } from "./hooks"

// Hook

export const App = () => {
  const ref = useRef<HTMLInputElement>()
  const windowSize = useWindowSize()

  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])

  return (
    <GeneralLayout>
      <Parallax pages={4} ref={ref}>
        {/* Background */}
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
              backgroundColor: "#0e0b1880",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </ParallaxLayer>

        {/* Section 1: MAIN */}

        <ParallaxLayer speed={2} offset={0} factor={1}>
          <MainSection windowSize={windowSize} />
        </ParallaxLayer>

        {/* MENUU*/}
        <ParallaxLayer
          speed={10}
          factor={1}
          sticky={{ start: 0.63, end: 4 }}
          style={{
            position: "absolute",
            height: "8rem",
          }}
        >
          <Menu scrollToPage={(page) => ref!.current!.scrollTo(page)} />
        </ParallaxLayer>

        {/* Section 2: STACK */}
        <Section2 windowSize={windowSize} />

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
