import React,{useState} from 'react'
import {
  Tabs,
  Input
} from 'antd'
import './index.css'

export default function USBasedOnPrevious() {
  const [person, setPerson] = useState({name:'hanmeimei', age: 18})
  const [person2, setPerson2] = useState({name:'hanmeimei', age: 18})

  const setNewName = value => {
    setPerson({name: value})
  }

  const setNewName2 = value => {
    setPerson2(previousPerson => {
      return {
      ...previousPerson,
      name: value
      }
    })
  }

  return (
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="错误的setState" key="1" style={{ height: 200 }}>
        <Input.Search placeholder="input your name" enterButton="set new name" size="middle" onSearch={setNewName}/>
          <p>person info is {JSON.stringify(person)}</p>
        </Tabs.TabPane>
        <Tabs.TabPane tab="正确的setState" key="2">
          <Input.Search placeholder="input your name" enterButton="set new name" size="middle" onSearch={setNewName2}/>
          <p>person info is {JSON.stringify(person2)}</p>
        </Tabs.TabPane>
    </Tabs>
  )
}
