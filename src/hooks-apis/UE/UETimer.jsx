import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  Alert
} from 'antd'
import HightlightCode from '../HighlightCode'

function UETimer(props) {
  const [show, isShow] = useState(false)
 
  const codes = [
    {
      codeTitle: 'React Class',
      codeDesc: 
      `
          componentDidMount(){
            if(this.timer){
              return 
            }
        
            this.timer = setTimeout(() => {
              this.setState({
                show: true
              })
            }, 2000);
          }
        
          componentWillUnmount(){
            if(this.timer){
              clearTimeout(this.timer)
              this.setState({
                show: false
              })
            }
          }
      `,
    },
    {
      codeTitle: 'React Hooks',
      codeDesc: 
      `
          useEffect(() => {
            const timer = setTimeout(() => {
              isShow(true)
            }, 2000);
        
            return () => {
              isShow(false)
              clearTimeout(timer)
            }
          },[])
      `,
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      isShow(true)
    }, 2000);

    return () => {
      isShow(false)
      clearTimeout(timer)
    }
  },[])

  return (
    <div>
      <HightlightCode
        codes={codes}
      />
      <span>2s后弹出一个warning</span>
      {show ? 
        <Alert
          message="记得在useEffect第一个参数EffectCallback中的返回清除timer"
          type="warning"
          closable/> : null}
    </div>
  )
}

UETimer.propTypes = {

}

export default UETimer

