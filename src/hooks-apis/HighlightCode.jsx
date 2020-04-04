import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
SyntaxHighlighter.registerLanguage('javascript',js)

function HighlightCode(props) {
  return (
    <div>
        {props.codes.map((code,index) => {
          return <div key={index}>
            <h2>{code.codeTitle}</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
              {code.codeDesc}
            </SyntaxHighlighter>
          </div>
        })}
    </div>
  )
}

HighlightCode.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.shape({
    codeDesc: string,
    codeTitle: string
  })),
}

export default HighlightCode

