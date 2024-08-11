import { useState } from 'react'
import CaretIcon from '../icons/caretIcon'

export default function AccordionItem(props) {
  const [show, setShow] = useState(false)
  return (
    <div className={`accordion-item  ${show && 'show'}`}>
      <div className="accordion-head" onClick={() => setShow(oldState => !oldState)}>
        <div className="title">
          <p>{props.label}</p>
        </div>
        <div className="icon">
          <CaretIcon />
        </div>
      </div>
      <div className={`accordion-body`}>{props.children}</div>
    </div>
  )
}
