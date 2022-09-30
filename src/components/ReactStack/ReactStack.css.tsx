import { css } from "@emotion/react"

export const style = () => {
  return css`
    color: white;
    /* background-color: #ffffff19; */
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      text-align: center;
      color: #83f6fc;
      margin-bottom: 2rem;
    }
    .stackList {
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 11rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 0.85rem;
      li {
        padding-top: 0.2rem;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
        text-align: center;
        display: flex;
        justify-content: center;
        img {
          width: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
    #bottomSec {
      margin-top: -0.25rem;
      display: flex;
      justify-content: space-around;

      /* background-color: red; */
      .botsubSec {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          margin-bottom: 0.5rem;
        }
        .leftList {
          height: auto;
          li {
            font-size: 0.8rem;
          }
          img {
            filter: brightness(3) invert(0);
          }
        }
      }
    }
  `
}
