import React,{useState} from 'react'
import {InputNumber} from 'antd'

export default function USNormal() {
  const [age, setAge] = useState(0)

  return (
    <div>
      <InputNumber type="text" onChange={value => setAge(value)} min={0} max={180}/>
      <span>{`your age is ${age}`}</span>
    </div>
  )
}
