import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from 'antd'
import { CaretRightOutlined } from '@ant-design/icons';
import {
  Link
} from 'react-router-dom'

function Main(props) {
  const navList = require('./AppConfig.json')

  const _renderItem = (item,index) => (
    <Link to={{
      pathname: item.mainPath,
      subTitles: item.subTitles
    }}>
      <List.Item
        key={index}
      >
        {item.mainTitle}
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
      dataSource={navList}
      footer={
        <div>
          <b>React Hooks Demo</b> 
        </div>
      }
      renderItem={_renderItem}
    />
  )
}

Main.propTypes = {

}

export default Main

