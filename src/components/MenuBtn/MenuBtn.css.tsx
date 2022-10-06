import { css } from "@emotion/react"
import { bp } from "../../utils"

export const style = () => {
  return css`
    background: transparent;
    border: none;
    color: #e1f8ff;
    border-radius: 3px;
    padding: 1.5rem 2.75rem 1.5rem 2.75rem;
    font-weight: 700;
    font-size: 1.1rem;
    font-family: "Rubik";
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    :hover,
    :active {
      color: #61dafb;
      border-bottom: 1px solid #61dafb;
      padding: 1.75rem 4rem 1.75rem 4rem;
    }
    ${bp.tablet} {
      padding: 1rem 1.7rem 1rem 1.7rem;
      :hover,
      :active {
        padding: 1rem 1.7rem 1rem 1.7rem;
      }
    }
    ${bp.phone} {
      padding: 0.8rem 0.5rem 0.8rem 0.5rem;
      font-size: 0.9rem;
      :hover :focus {
        padding: 0.8rem 0.5rem 0.8rem 0.5rem;
      }
    }
    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  `
}
