import React,{useEffect, useReducer} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {
  Descriptions,
  List,
  Spin,
  Alert,
  Input
} from 'antd'

const initialState = {
  isLoading: true,
  users: [],
  error: '',
  api: 'https://jsonplaceholder.typicode.com/users'
}

const reducer = (state, action) => {
  switch(action.type){
    case 'REQUEST_START':
      return {
        isLoading: true,
        users: [],
        error: ''
      }
    case 'REQUEST_SUCCESS':
      return {
        isLoading: false,
        users: action.payload,
        error: ''
      }
    case 'REQUEST_FAIL':
      return {
        isLoading: false,
        users: [],
        error: action.payload
      }
    case 'CHANGE_API':
      return {
        api: 'https://jsonplaceholder.typicode.com/' + action.payload
      }
    default:
      return state
  }
}


function URNetwork(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: 'REQUEST_START'
    })
    axios.get(state.api)
    .then(response => {
      dispatch({
        type: 'REQUEST_SUCCESS',
        payload: response.data
      })
    })
    .catch(e => {
      console.log(e)
      dispatch({
        type: 'REQUEST_FAIL',
        payload: JSON.stringify(e)
      })
    })
  },[state.api])

  const _renderItem = item => {
    return  <Descriptions title="User Info">
      <Descriptions.Item label="UserName">{item.name}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{item.phone}</Descriptions.Item>
      <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
      <Descriptions.Item label="Address">
        {item.address.city} - {item.address.suite} - {item.address.street}
      </Descriptions.Item>
      <Descriptions.Item label="Website">{item.website}</Descriptions.Item>
    </Descriptions>
  }

  const _renderList = () => {
    return <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={state.users}
      renderItem={_renderItem}
    />
  }

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center' ,alignItems: 'center'}}>
      <Input.Search placeholder="input api path" enterButton="continue" size="middle" onSearch={value => dispatch({
        type: 'CHANGE_API',
        payload: value
      })}/>
      {state.isLoading ? <Spin size="large" /> :
        state.error ? <Alert
          message="Network Error"
          description={state.error}
          type="error"
        /> : _renderList()}
    </div>
  )
}

URNetwork.propTypes = {

}

export default URNetwork

