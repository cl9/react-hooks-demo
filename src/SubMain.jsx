import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from 'antd'
import {
  Link
} from 'react-router-dom'

function SubMain(props) {
  console.log(props.locaiton)
  const _renderItem = (item,index) => (
    <Link to={{
      pathname:props.location.pathname + item.path,
    }}>
      <List.Item
        key={index}
      >
        {item.title}
      </List.Item>
    </Link>
  )

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={props.location.subTitles}
      footer={
        <div>
          <b>React Hooks Demo</b> 
        </div>
      }
      renderItem={_renderItem}
  />
  )
}

SubMain.propTypes = {

}

export default SubMain

