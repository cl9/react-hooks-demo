import React,{useReducer} from 'react'
import PropTypes from 'prop-types'
import {
   Button,
} from 'antd'
import HighlightCode from '../HighlightCode'

const reducer = (state, action) => {
  switch(action.type){
    case 'add':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'minus': 
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

function URBasic(props) {
  const [state, dispatch] = useReducer(reducer, {count: 60})

  return (
    <div>
      <HighlightCode 
        codes={[
          {
            codeTitle: '',
            codeDesc: `
              1. reducer： (state, action) => newState, 类似Redux的reducer
              2. initialState : React 不使用 state = initialState 这一由 
              Redux 推广开来的参数约定
            `
          }
        ]}/>
      <Button type="primary" onClick={() => dispatch({
        type: 'add',
        payload: 1
      })}>+1</Button>
      <span style={{padding: 10}}>Count: {state.count}</span>
      <Button type="primary" onClick={() => dispatch({
        type: 'minus',
        payload: 1
      })}>-1</Button>
    </div>
  )
}

URBasic.propTypes = {

}

export default URBasic

