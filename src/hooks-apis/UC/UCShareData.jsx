import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import ChildA from './ChildA'
import HighlightCode from '../HighlightCode'
export const ContentContext = React.createContext()
export const TitleContext = React.createContext()

function UCShareData(props) {
  const [title, setTitle] = useState('') 
  const [content, setContent] = useState('') 
  
  return (
    <div>
      <HighlightCode 
        classCode={`
          <TitleContext.Consumer>
            { 
              title => {
                return <ContentContext.Consumer>
                  {
                    content => {
                      return <span>{\`C|title is \${title}, content is \${content}\`}</span>
                    }
                  }
                </ContentContext.Consumer>
              }
            }
          </TitleContext.Consumer>
        `}
        hooksCode={`
          const title = useContext(TitleContext)
          const content = useContext(ContentContext)
        `}
        />
      <Input placeholder="input your title" size="middle" onChange={e => setTitle(e.target.value)}/>
      <Input placeholder="input your content" size="middle" onChange={e => setContent(e.target.value)}/>
      <TitleContext.Provider value={title}>
        <ContentContext.Provider value={content}>
          <ChildA/>
        </ContentContext.Provider>
      </TitleContext.Provider>
    </div>
  )
}

UCShareData.propTypes = {

}

export default UCShareData

