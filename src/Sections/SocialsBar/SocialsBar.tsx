import { style } from "./SocialsBar.css"
import { FaGithub } from "react-icons/fa"
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { MdEmail, MdOutlineEmail } from "react-icons/md"

export const SocialsBar = () => {
  return (
    <ul css={style}>
      <li>
        <a
          href="https://github.com/ricardoaxel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ricardoaxel"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a
          href="mailto:ricardoaxelgd@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </li>
    </ul>
  )
}
