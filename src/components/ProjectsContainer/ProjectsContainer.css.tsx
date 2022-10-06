import { css } from "@emotion/react"

export const style = () => {
  let min = 2
  let max = 5
  return css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.7rem;
    justify-content: space-evenly;
    li {
      background: white;
      color: black;
      width: 14rem;
      height: 14rem;
      margin: 0.5rem;
      padding: 1rem;
      box-shadow: 0px 13px 17px 3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 13px 17px 3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 13px 17px 3px rgba(0, 0, 0, 0.75);
      :nth-child(2n) {
        background-color: #181818;
        color: white;
      }
    }
  `
}
