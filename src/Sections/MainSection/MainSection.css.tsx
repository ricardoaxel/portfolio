import { css } from "@emotion/react"

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
      padding-bottom: 8rem;
      /* background-color: red; */
      height: 8rem;
      #im {
        margin-top: 0.5rem;
      }
      #reactSec {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1 {
        color: #61dafb;
        font-size: 3.5rem;
      }
      #reactLogo {
        width: 4.5rem;
      }
    }
  `
}
