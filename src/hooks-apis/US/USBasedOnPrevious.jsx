import React,{useState} from 'react'
import {
  Button,
  Tabs,
} from 'antd'
import './index.css'

export default function USBasedOnPrevious() {
  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)

  const increaseInterval = () => {
    setInterval(() => {
      setNumber(number + 1)
    }, 1000);
  }

  const increaseInterval2 = () => {
    setInterval(() => {
      setNumber2(previousNumber => previousNumber + 1)
    }, 1000);
  }

  const increaseImmediately = () => {
    setNumber(number + 1)
  }

  const increaseImmediately2 = () => {
    setNumber2(previousNumber => previousNumber + 1)
  }

  return (
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="错误的setState" key="1" style={{ height: 200 }}>
          <Button type='primary' onClick={increaseInterval} danger>increase 1 every second (incorrect)</Button>
          <Button style={{marginLeft: 30}} type='primary' onClick={increaseImmediately} danger>increase 1 immediately (incorrect)</Button>
          <p>total number is {number}</p>
        </Tabs.TabPane>
        <Tabs.TabPane tab="正确的setState" key="2">
          <Button type='primary' onClick={increaseInterval2}>increase 1 every second (correct)</Button>
          <Button style={{marginLeft: 30}} type='primary' onClick={increaseImmediately2}>increase 1 immediately (correct)</Button>
          <p>total number is {number2}</p>
        </Tabs.TabPane>
    </Tabs>
  )
}
