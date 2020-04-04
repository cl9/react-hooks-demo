import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from 'antd'
import { navList } from './AppConfig.js'
import {
  Link
} from 'react-router-dom'

function Main(props) {
  const _renderItem = (item,index) => (
    <Link to={{
      pathname: item.mainPath,
      subTitles: item.subTitles,
      overview: item.overview
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

