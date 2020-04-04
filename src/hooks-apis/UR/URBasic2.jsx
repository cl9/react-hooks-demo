import React,{useReducer} from 'react'
import PropTypes from 'prop-types'
import {
   Button,
} from 'antd'
import HighlightCode from '../HighlightCode'

const initialAction = initialCount => {
  return {
    count: initialCount
  }
}

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
    case 'reset':
      return initialAction(action.payload)
    default:
      return state
  }
}

function URBasic2(props) {
  const [state, dispatch] = useReducer(reducer, props.initialCount || 60, initialAction)

  return (
    <div>
      <HighlightCode 
        codes={[
          {
            codeTitle: '',
            codeDesc: `
              3. initialAction (可选): 
              useReducer(reducer, props.initialCount, initialCount => {
                return {
                  count: initialCount
                }
              })
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
      <Button style={{marginLeft: 20}} type="primary" onClick={() => dispatch({
        type: 'reset',
        payload: props.initialCount || 60
      })}>reset</Button>
    </div>
  )
}

URBasic2.propTypes = {
  initialCount: PropTypes.number
}

export default URBasic2

