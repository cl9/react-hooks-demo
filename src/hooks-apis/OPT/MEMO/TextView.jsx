import React from 'react'
import PropTypes from 'prop-types'

function TextView(props) {
    const result = typeof (props.text) === 'object' ? JSON.stringify(props.text) : props.text

    console.log(`Rendering Text ${result}`)

    return (
        <div>
            <span>{String(result)}</span>
        </div>
    )
}

TextView.propTypes = {
    text: PropTypes.any.isRequired
}

export default React.memo(TextView)

