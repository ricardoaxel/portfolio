import { css } from "@emotion/react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { dimensions } from "../../utils"

export const style = () => {
  const windowSize = useWindowSize()
  return css`
    .card1 {
    }
    .card2 {
    }
    .card3 {
    }
  `
}
