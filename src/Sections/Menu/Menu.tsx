import { style } from "./Menu.css"
import { MenuBtn } from "../../components/MenuBtn/MenuBtn"
import { BsCodeSlash } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
interface Props {
  className?: string
  scrollToPage: (page: any) => void
}

export const Menu = ({ scrollToPage }: Props) => {
  return (
    <menu css={style}>
      <li>
        <MenuBtn
          value={"Stack"}
          icon={<BsCodeSlash />}
          onClick={() => scrollToPage(1)}
        />
      </li>
      <li>
        {" "}
        <MenuBtn
          value={"Experience"}
          icon={<MdWorkOutline />}
          onClick={() => scrollToPage(2)}
        />
      </li>
      <li>
        {" "}
        <MenuBtn
          value={"Contact"}
          icon={<AiOutlineMail />}
          onClick={() => scrollToPage(3)}
        />
      </li>
    </menu>
  )
}
