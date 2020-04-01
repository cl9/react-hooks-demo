import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import HightlightCode from '../HighlightCode'

function UEListener(props) {
  const [keyList, setKeyList] = useState([])

  const keyPress = (e) => {
    setKeyList(previousKeyList => [
      e.key,
      ...previousKeyList
    ])
  }
  
  useEffect(() => {
    document.addEventListener('keypress', keyPress)

    return () => {
      document.removeEventListener('keypress', keyPress)
    }
  })

  return (
    <div>
      <HightlightCode
        classCode={`
        componentDidMount(){
          document.addEventListener('keypress', keyPress)
        }
      
        componentWillUnmount(){
          document.removeEventListener('keypress', keyPress)
        }
        `}
        hooksCode={`
        useEffect(() => {
          document.addEventListener('keypress', keyPress)
      
          return () => {
            document.removeEventListener('keypress', keyPress)
          }
        })
      `}
      />
      <Card style={{ width: 300 }}>
        {keyList.map(((pressedKey,index) => {
          return <p key={index}>{`your press key is "${pressedKey}"`}</p>
        }))}
      </Card>,
    </div>
  )
}

UEListener.propTypes = {

}

export default UEListener

