import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
    Button
} from 'antd'
import HighlightCode from '../HighlightCode'

function URFVariable(props) {
    const [count, setCount] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(previousCount => previousCount + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <HighlightCode
                codes={[{
                    title: '',
                    codeDesc: `
                    const intervalRef = useRef()

                    useEffect(() => {
                        intervalRef.current = setInterval(() => {
                            setCount(previousCount => previousCount + 1)
                        }, 1000);

                        return () => {
                            clearInterval(intervalRef.current)
                        }
                    }, [])
                    `
                }]}
            />
            <span>{count}</span>
            <Button onClick={() => { clearInterval(intervalRef.current) }}>停止倒计时</Button>
        </div>
    )
}

URFVariable.propTypes = {

}

export default URFVariable

