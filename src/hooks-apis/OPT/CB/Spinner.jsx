import React from 'react'
import PropTypes from 'prop-types'
import {
    Menu,
    Dropdown
} from 'antd'

function Spinner(props) {
    console.log('Rendering Options')

    const menu = (
        <Menu>
            {['A', 'B', 'C', 'D'].map(item => {
                return <Menu.Item key={item}>
                    <a onClick={e => {
                        e.preventDefault()
                        props.onItemClick(item)
                    }}>{item}</a>
                </Menu.Item>
            })}
        </Menu>
    )

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {props.title}
            </a>
        </Dropdown>
    )
}

Spinner.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array,
    onItemClick: PropTypes.func.isRequired
}

export default React.memo(Spinner)

