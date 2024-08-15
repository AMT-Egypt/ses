import { useState } from 'react'
import MircoPower from './MircoPower'
import ListTitleProduct from './ListTitleProduct'
import MircoDynaFin from './MircoDynaFin'
import MircoDynaBus from './MircoDynaBus'
import VConnect from './VConnect'
import MicrosoftIcon from 'modules/icons/microsoftIcon'

export default function ProductsModule(props: any) {
  const [display,setDisplay] = useState("1")
  return (
    <div className="productsModule container-fluid">
      <div className="container mold">
        <div className="flex">
          <div className="content-side">
            <MircoPower play={display} icons={<MicrosoftIcon/>}/>
            <MircoDynaFin play={display} icons={<MicrosoftIcon/>}/>
            <MircoDynaBus play={display} icons={<MicrosoftIcon/>}/>
            <VConnect play={display}/>
          </div>
          <div className='list'>
            <ListTitleProduct display={display} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </div>
  )
}
