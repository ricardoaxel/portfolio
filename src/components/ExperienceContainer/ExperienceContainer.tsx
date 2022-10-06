import { style } from "./ExperienceContainer.css"
import { useState } from "react"
import AnimateHeight from "react-animate-height"

interface Props {
  className?: string
}

export const ExperienceContainer = ({ className }: Props) => {
  const [openDetail, setOpenDetail] = useState(false)
  return (
    <li css={style} className={className}>
      <AnimateHeight duration={500} height={openDetail ? "auto" : 40}>
        <div id="topSec">
          <div id="leftSide">
            <h3>React Developer</h3>
            <p id="company">Let's Go Eat - Lawrenceville, GA</p>
          </div>
          <div id="rightSide">
            <p> 2022-07 - Present</p>
          </div>
        </div>

        <div id="content">
          <div id="description" className="subSideContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam
            doloribus magni ex quia quam suscipit iste, cum nostrum quod a atque
            expedita, cumque reiciendis officiis nesciunt aliquam! Vel,
            pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem corporis expedita minus ipsam porro explicabo? Eligendi
            asperiores possimus minus dignissimos molestiae magni, dicta
            nesciunt deleniti suscipit. Expedita quaerat sed omnis. Dolore
            numquam, reprehenderit inventore ab, velit itaque sequi temporibus
            ad id ducimus porro perspiciatis rem est perferendis. Quaerat,
            beatae, veniam obcaecati sequi provident, libero facilis dolores
            distinctio deserunt animi repudiandae? Facilis nemo voluptate
            corrupti hic, laudantium quisquam minima aut beatae minus doloribus
            sequi deserunt suscipit magni modi soluta distinctio, deleniti,
            repudiandae ex nisi quam perferendis! Corporis at magnam explicabo
            rerum. Veritatis maiores quidem voluptates aperiam inventore
            quibusdam consequatur nisi perspiciatis fugiat, officia doloremque
            ratione ullam corporis ab fuga dicta earum laudantium temporibus,
            qui doloribus? Facere consectetur placeat autem soluta debitis.
            Ratione laborum ut eius totam nam culpa cum harum aliquam fuga
            praesentium quo, dolore quod nihil nesciunt eos reprehenderit illo
            quidem numquam optio officiis. Iure vel cupiditate eaque fugit
            provident.
          </div>
          <div id="projects" className="subSideContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam
            doloribus magni ex quia quam suscipit iste, cum nostrum quod a atque
            expedita, cumque reiciendis officiis nesciunt aliquam! Vel,
            pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem corporis expedita minus ipsam porro explicabo? Eligendi
            asperiores possimus minus dignissimos molestiae magni, dicta
            nesciunt deleniti suscipit. Expedita quaerat sed omnis. Dolore
            numquam, reprehenderit inventore ab, velit itaque sequi temporibus
            ad id ducimus porro perspiciatis rem est perferendis. Quaerat,
            beatae, veniam obcaecati sequi provident, libero facilis dolores
            distinctio deserunt animi repudiandae? Facilis nemo voluptate
            corrupti hic, laudantium quisquam minima aut beatae minus doloribus
            sequi deserunt suscipit magni modi soluta distinctio, deleniti,
            repudiandae ex nisi quam perferendis! Corporis at magnam explicabo
            rerum. Veritatis maiores quidem voluptates aperiam inventore
            quibusdam consequatur nisi perspiciatis fugiat, officia doloremque
            ratione ullam corporis ab fuga dicta earum laudantium temporibus,
            qui doloribus? Facere consectetur placeat autem soluta debitis.
            Ratione laborum ut eius totam nam culpa cum harum aliquam fuga
            praesentium quo, dolore quod nihil nesciunt eos reprehenderit illo
            quidem numquam optio officiis. Iure vel cupiditate eaque fugit
            provident.
          </div>
        </div>

        <button onClick={() => setOpenDetail(!openDetail)}>v</button>
      </AnimateHeight>
    </li>
  )
}
