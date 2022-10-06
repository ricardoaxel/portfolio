import { css } from "@emotion/react"

export const style = () => {
  return css`
    color: white;
    width: 100%;
    max-width: 85rem;
    height: auto;
    margin: 2rem 1rem;
    padding: 2rem;
    position: relative;
    background: #181818;
    transition: 0.3s;
    /* BORDER COLOR STUFF */
    ///////////////////////////////////////////////////////////////
    /* Fixed Color */
    border-radius: 30px;
    background: linear-gradient(#181818, #181818) padding-box,
      linear-gradient(45deg, #51f6ff, #ffffff) border-box;
    border: 0.17rem solid transparent;
    transition: 0.3s;
    :after {
      transition: 0.3s;
    }
    /* ANIMATED */
    :hover {
      border-radius: 30px;
      :before,
      :after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        background: linear-gradient(45deg, #51f6ff, #51f6ff3b, #ffffff);
        background-size: 400% 400%;
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border-radius: 30px;
        z-index: -1;
        animation: animate 5s ease alternate infinite;
      }
      :after {
        filter: blur(10px);
      }
      @keyframes animate {
        0% {
          background-position: 0 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
    ///////////////////////////////////////////////////////////////

    /* Content */
    #topSec {
      display: flex;
      justify-content: space-between;
      #leftSide {
        h3 {
          font-size: 1.3rem;
          /* color: #61dafb; */
        }
        #company {
          margin-top: 0.25rem;
          color: #61dafb;
          font-style: italic;
        }
      }
      #rightSide {
        /* color: #61dafb; */
        font-weight: 500;
        /* display: flex;
        justify-content: flex-end;
        background-color: red; */
        p {
          /* background: red; */
          padding: 0.75rem 0.25rem 0.75rem 1rem;
          height: auto;
          border-bottom: solid 1px #61dafb;
        }
        /* text-decoration: underline; */
        /* font-style: italic; */
      }
    }
    #content {
      margin-top: 2rem;
      display: flex;
      .subSideContent {
        text-align: justify;
      }
      #description {
        margin-right: 2rem;
      }
      #projects {
      }
    }
    button {
      position: absolute;
      width: 2rem;
      margin-left: calc(50% - 2rem);
      bottom: 0.25rem;
    }
  `
}
