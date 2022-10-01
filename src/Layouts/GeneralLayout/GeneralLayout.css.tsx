import { css } from "@emotion/react"

export const Style = () => {
  return css`
    //Cards font
    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    * {
      //background-color: #b6341d;
      margin: 0;
      //SCROLLBAR
      //Firefox
      //SCROLLBAR
      scrollbar-color: blue;
      scrollbar-width: thin;
      //Chrome & Others
      ::-webkit-scrollbar {
        height: 7px;
        background: blue;
        cursor: pointer;
      }
      ::-webkit-scrollbar-thumb {
        background: blue;
        cursor: pointer;
        -webkit-border-radius: 1ex;
        -webkit-box-shadow: 0px 1px 2px blue;
      }

      ::-webkit-scrollbar-corner {
        background: #000;
      }

      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }
    body {
      overflow: hidden;
      margin: 0;
      color: blac;
      transition: color 0.2s;
      font-family: "Rubik";
      width: 100%;
      height: 100vh;
      background-color: green;
      overflow-y: auto;
      /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace; */
    }
    /* .aplication {
      width: 100%;
      height: 100vh;
      background-color: green;
      overflow-y: auto;
    } */
  `
}
