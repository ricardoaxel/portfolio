import { css } from "@emotion/react"

export const style = () => {
  return css`
    background-color: #2e10101f;
    border: 2px solid #61dafb;
    border-radius: 0.75rem;
    transition: 0.4s;
    /* height: 100%; */
    width: 100%;

    .contentArea {
      margin: 1rem;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      background-color: #61dafb10;
      border-radius: 0.5rem;
    }
    :hover {
      background-color: #61dafb10;
    }
  `
}
