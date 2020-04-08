import React from 'react'
import PropTypes from 'prop-types'

function OptionsResultShow(props) {
    console.log('Rendering OptionsResultShow')

    return (
        <div>
            <p>您选择的选项是：{props.option}</p>
        </div>
    )
}

OptionsResultShow.propTypes = {

}

export default React.memo(OptionsResultShow)

