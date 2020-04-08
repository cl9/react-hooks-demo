import React from 'react'
import PropTypes from 'prop-types'

function SexResultShow(props) {
    console.log('Rendering SexResultShow')

    return (
        <div>
            <p>您的性别是：{props.sex}</p>
        </div>
    )
}

SexResultShow.propTypes = {

}

export default React.memo(SexResultShow)

