import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
SyntaxHighlighter.registerLanguage('javascript',js)

function HighlightCode(props) {
  return (
    <div>
      <h2>React Class</h2>
      <SyntaxHighlighter language="javascript" style={docco}>
        {props.classCode}
      </SyntaxHighlighter>
      <h2>React Hooks</h2>
      <SyntaxHighlighter language="javascript" style={docco}>
        {props.hooksCode}
      </SyntaxHighlighter>
    </div>
  )
}

HighlightCode.propTypes = {
  classCode: PropTypes.string.isRequired,
  hooksCode: PropTypes.string.isRequired
}

export default HighlightCode

