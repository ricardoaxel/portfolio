import { css } from "@emotion/react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { dimensions, menuHeight } from "../../utils"

export const style = () => {
  const windowSize = useWindowSize()

  let separation = parseInt(menuHeight.replace("rem", "")) + 2 + "rem"
  return css`
    /* background: rgb(24, 24, 24);
    background: linear-gradient(
      180deg,
      rgba(24, 24, 24, 1) 3%,
      rgba(93, 93, 93, 1) 72%,
      rgba(116, 116, 116, 1) 100%
    ); */
    background-color: #181818;
    width: calc(100% - 8rem);
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: ${separation} 4rem;
    #experienceList {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 0.7rem;
      justify-content: space-evenly;
      z-index: 1;
    }
  `
}
