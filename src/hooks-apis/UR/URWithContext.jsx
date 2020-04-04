import React,{useReducer} from 'react'
import PropTypes from 'prop-types'
import HighlightCode from '../HighlightCode'
import ChildA from './ChildA'
import CHildB from './ChildB'
import ChildC from './ChildC'

export const CountContext = React.createContext()

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
  const [state, dispatch] = useReducer(reducer, 60, initialAction)

  return (
    <div>
      <HighlightCode 
        codes={[
          {
            codeTitle: '',
            codeDesc: `
              ChildA、ChildB、ChildC共享state:count
            `
          }
        ]}/>
      <span style={{padding: 10}}>Count: {state.count}</span>
      <CountContext.Provider value={{countState: state, dispatch: dispatch}}>
        <ChildA initialCount={60}/>
        <CHildB initialCount={60}/>
        <ChildC initialCount={60}/>
      </CountContext.Provider>
    </div>
  )
}

URBasic2.propTypes = {
  initialCount: PropTypes.number
}

export default URBasic2

