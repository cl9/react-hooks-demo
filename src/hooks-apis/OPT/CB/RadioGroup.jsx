import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Radio
} from 'antd'

function RadioGroup(props) {
    console.log('Rendering RadioGroup')
    const [value, setValue] = useState(0)

    return (
        <Radio.Group
            onChange={e => {
                setValue(e.target.value)
                props.onSelect(['男', '女'][e.target.value])
            }}
            value={value}>
            {['男', '女'].map((item, index) => {
                return <Radio value={index} key={index}>{item}</Radio>
            })}
        </Radio.Group>
    )
}

RadioGroup.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func.isRequired
}

export default React.memo(RadioGroup)

