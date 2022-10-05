import { css } from "@emotion/react"
import { bp } from "../../utils"
export const style = () => {
  return css`
    position: absolute;
    background-color: #030305c9;
    color: #fafafa;
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;

    .centerContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 5rem;
      #im {
        margin-top: 0.5rem;
      }
      #reactSec {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #description {
        width: 80%;
        padding: 3rem 0rem 0rem 0rem;
        font-size: 1.2rem;
        font-weight: 300;
      }
      h1 {
        color: #61dafb;
        font-size: 3.5rem;
        margin-left: 1rem;
        ${bp.tablet} {
          font-size: 3rem;
        }
        ${bp.phone} {
          font-size: 2rem;
        }
      }
      #reactLogo {
        width: 4.5rem;
      }
    }
  `
}
