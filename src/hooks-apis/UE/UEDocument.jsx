import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import HightlightCode from '../HighlightCode'

function UEDocument(props) {
  const [title, setTitle] = useState('default')
  
  useEffect(() => {
    document.title = `your input ducument title is ${title}`
  })

  return (
    <div>
      <HightlightCode
        classCode={`
          componentDidMount(){
            document.title = \`your input ducument title is \${title}\`
          }
        
          componentDidUpdate(){
            document.title = \`your input ducument title is \${title}\`
          }
        `}
        hooksCode={`
          useEffect(() => {
            document.title = \`your input ducument title is \${title}\`
          })
        `}
      />
      <Input.Search placeholder="input document title" enterButton="set document title" size="middle" onSearch={setTitle}/>
    </div>
  )
}

UEDocument.propTypes = {

}

export default UEDocument

