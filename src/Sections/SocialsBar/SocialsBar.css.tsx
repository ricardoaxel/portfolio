import { css } from "@emotion/react"
import { bp } from "../../utils"

export const style = () => {
  return css`
    /* background-color: #989ac021; */

    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    padding-top: 0.25rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    margin: 0.5rem;
    li {
      /* background-color: red; */
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 1.25rem;
      transition: 0.2s;
      a {
        color: white;
      }
      svg {
        font-size: 1.25rem;
        cursor: pointer;
        transition: color 0.2s, font-size 0.4s;
        :hover,
        :active {
          font-size: 1.5rem;
          color: #61dafb;
        }
      }
    }
  `
}
