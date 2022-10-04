import { css } from "@emotion/react"

export const style = () => {
  return css`
    /* background: #eefafd20; */
    background: transparent;
    border: 1.9px solid #61dafb;
    color: #e1f8ff;
    border-radius: 4px;
    padding: 1.5rem 2.75rem 1.5rem 2.75rem;
    font-weight: 700;
    font-size: 1.1rem;
    font-family: "Rubik";
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      background: #4bdce4;
      padding: 1.25rem 3.5rem 1.25rem 3.5rem;
    }
    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  `
}
