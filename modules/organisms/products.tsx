import { useState } from 'react'
import MircoPower from './MircoPower'
import ListTitleProduct from './ListTitleProduct'
///""
export default function ProductsModule(props: any) {
  const [display,setDisplay] = useState("1")
  return (
    <div className="productsModule container-fluid">
      <div className="container mold">
        <div className="flex">
          <div className="content-side">
            <MircoPower play={display}/>
          </div>
          <div className='list'>
            <ListTitleProduct display={display} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </div>
  )
}
