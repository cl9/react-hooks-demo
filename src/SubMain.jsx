import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from 'antd'
import {
  Link
} from 'react-router-dom'
import HighlightCode from './hooks-apis/HighlightCode'

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
    <div>
      <HighlightCode codes={
        [{
          codeTitle: '',
          codeDesc: props.location.overview || ''
        }]
      }/>
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
    </div>
  )
}

SubMain.propTypes = {

}

export default SubMain

