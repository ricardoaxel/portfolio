import { css } from "@emotion/react"
import { bp } from "../../utils"

export const style = () => {
  return css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.7rem;
    justify-content: center;
    height: 100%;

    ${bp.phone} {
      justify-content: space-evenly;
    }

    li {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      margin-left: 1.75rem;
      margin-right: 1.75rem;
      ${bp.tablet} {
        margin-left: 0.3rem;
        margin-right: 0.3rem;
      }

      div {
        border-radius: 0.5rem;
        background: #08081030;
        padding: 0.2rem;
        padding-left: 0.3rem;
        padding-right: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.1s;
        :hover {
          background: #51f6ffdd;
        }
        ${bp.tablet} {
          padding-left: 0rem;
          padding-right: 0rem;
        }
        .imgContainer {
          background-color: transparent;
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  `
}
