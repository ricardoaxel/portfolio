import { css } from "@emotion/react"

export const style = () => {
  return css`
    .smallcards {
      /* width: 15%; */
      /* height: calc(55% - 2rem); */
      position: absolute;
    }
    #card1 {
      min-width: 17rem;
      width: 25%;
      left: 5%;
    }
    #card3 {
      right: 5%;
    }

    .card2 {
      /* height: calc(65% - 2rem); */
      /* width: 40%; */
      min-width: 20rem;
    }
  `
}
