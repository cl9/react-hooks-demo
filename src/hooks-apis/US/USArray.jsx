import React,{useState} from 'react'
import {
  Tabs,
  Input,
  List
} from 'antd'
import './index.css'

export default function USBasedOnPrevious() {
  const [newsList, setNewsList] = useState([])
  const [newsList2, setNewsList2] = useState([])

  const _renderItem = (item,index) => (
    <List.Item
        key={index}
      >
        {item}
    </List.Item>
  )

  const addNews = news => {
    newsList.push(news)
    setNewsList(newsList)
  }

  const addNews2 = news => {
    setNewsList2(previousNewsList => {
      return [
        news,
        ...previousNewsList
      ]
    })
  }

  return (
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="错误的setState(use push)" key="1" style={{ height: 200 }}>
        <Input.Search placeholder="input news" enterButton="add news" size="middle" onSearch={addNews}/>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={newsList}
          renderItem={_renderItem}
        />
        </Tabs.TabPane>
        <Tabs.TabPane tab="正确的setState(1. use spread oprator 2. use concat)" key="2">
        <Input.Search placeholder="input news" enterButton="add news" size="middle" onSearch={addNews2}/>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 10,
            }}
            dataSource={newsList2}
            renderItem={_renderItem}
          />
        </Tabs.TabPane>
    </Tabs>
  )
}
