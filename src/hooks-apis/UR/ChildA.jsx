import React,{useContext} from 'react'
import {
  Button,
} from 'antd'
import {CountContext} from './URWithContext'

function ChildA(props) {
  const {countState, dispatch} = useContext(CountContext)

  return (
    <div>
      <span style={{display: 'inline-block',minWidth: 50}}>ChildA</span>
      <Button type="primary" onClick={() => dispatch({
        type: 'add',
        payload: 1
      })}>+1</Button>
      <Button style={{marginLeft: 20}} type="primary" onClick={() => dispatch({
        type: 'minus',
        payload: 1
      })}>-1</Button>
      <Button style={{marginLeft: 20}} type="primary" onClick={() => dispatch({
        type: 'reset',
        payload: props.initialCount
      })}>reset</Button>
    </div>
  )
}

export default ChildA

