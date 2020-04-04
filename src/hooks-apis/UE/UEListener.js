import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import HightlightCode from '../HighlightCode'

function UEListener(props) {
  const [keyList, setKeyList] = useState([])

  const codes = [
    {
      codeTitle: 'React Class',
      codeDesc: 
      `
          componentDidMount(){
            document.addEventListener('keypress', keyPress)
          }
        
          componentWillUnmount(){
            document.removeEventListener('keypress', keyPress)
          }
      `,
    },
    {
      codeTitle: 'React Hooks',
      codeDesc: 
      `
          useEffect(() => {
            document.addEventListener('keypress', keyPress)
        
            return () => {
              document.removeEventListener('keypress', keyPress)
            }
          })
      `,
    }
  ]

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
        codes={codes}
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

