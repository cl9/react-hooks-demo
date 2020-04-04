import React,{useReducer} from 'react'
import {Input, List, Button} from 'antd'

const initializer = {
  todos: []
}

const reducer = (state, action) => {
  switch(action.type){
    case 'addTodo':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            isEdit: false,
            text:action.payload
          }
        ]
      }
    case 'deleteTodo':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload+1)
        ]
      }
    case 'changeEditMode':
      return {
        ...state,
        todos:state.todos.map((item, index) => {
          if (index !== action.payload) {
            return item
          }
      
          return {
            ...item,
            isEdit: true
          }
        })
      }
    case 'modifyTodo':
      return {
        ...state,
        todos:state.todos.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
      
          return {
            ...item,
            text: action.payload.value,
            isEdit: false
          }
        })
      }
    default:
      return state
  }
}

function URComplex() {
  const [state, dispatch] = useReducer(reducer, initializer)

  return (
    <div>
      <Input.Search placeholder="input todo" enterButton="add todo" size="middle" onSearch={value => dispatch({
        type: 'addTodo',
        payload: value
      })}/>
      <List
        bordered
        dataSource={state.todos}
        renderItem={(item,index) => (
          <List.Item
            actions={[
            <Button 
              type="primary"
              key="list-loadmore-edit"
              onClick={() => dispatch({
                type: 'changeEditMode',
                payload: index
              })}>
              edit
            </Button>, 
            <Button 
              key="list-loadmore-delete" 
              type="primary"
              onClick={() => dispatch({
                type: 'deleteTodo',
                payload: index
              })}>
              delete
            </Button>]}>
            {item.isEdit ? <Input.Search 
              defaultValue={item.text}
              placeholder="input todo" 
              enterButton="modify todo" 
              size="middle" 
              onSearch={value => dispatch({
                type: 'modifyTodo',
                payload: {
                  index,
                  value
                }
              })}/> : <span>{item.text}</span>}
          </List.Item>
      )}
    />
    </div>
  )
}

export default URComplex
