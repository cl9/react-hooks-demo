import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Radio
} from 'antd'

class RadioGroup extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }

    getItem = () => {
        return this.props.list[this.state.value]
    }

    render() {
        return (
            <Radio.Group
                onChange={e => {
                    this.setState({
                        value: e.target.value
                    })
                }}
                value={this.state.value}>
                {this.props.list.map((item, index) => {
                    return <Radio value={index} key={index}>{item}</Radio>
                })}
            </Radio.Group>
        )
    }
}

RadioGroup.propTypes = {
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func
}

export default React.memo(RadioGroup)

