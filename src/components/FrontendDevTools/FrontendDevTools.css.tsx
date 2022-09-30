import { css } from "@emotion/react"

export const style = () => {
  return css`
    color: white;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      text-align: center;
      color: #83f6fc;
      margin-bottom: 1rem;
      margin-top: 1rem;

      font-size: 1rem;
    }
    .stackList {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
      /* height: 15rem; */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 0.7rem;
      justify-content: center;

      li {
        padding-top: 0.2rem;
        margin-bottom: 0.75rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.25rem;
        margin-left: 0.25rem;

        div {
          border-radius: 0.5rem;
          background: #ffffff22;
          padding: 0.2rem;
          padding-right: 0.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  `
}
