import React,{useContext} from 'react'
import {ContentContext, TitleContext} from './UCShareData'

function ChildC() {
  const title = useContext(TitleContext)
  const content = useContext(ContentContext)

  return (
    <div>
       <span>{`C|title is ${title}, content is ${content}`}</span>
    </div>
  )
}

export default ChildC

