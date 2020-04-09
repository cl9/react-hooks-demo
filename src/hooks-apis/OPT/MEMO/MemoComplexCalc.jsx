import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import {
    Button
} from 'antd'
import HighlightCode from '../../HighlightCode'

function MemoComplexCalc() {
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [count2, setCount2] = useState(0)

    // const complexCalcResult = () => {
    //     let i = 0
    //     while (i < 4000000000) {
    //         i++
    //     }
    //     return count % 2 === 0 ? '偶数' : '奇数'
    // }

    const complexCalcResult = useMemo(() => {
        let i = 0
        while (i < 4000000000) {
            i++
        }
        return count % 2 === 0 ? '偶数' : '奇数'
    }, [count])

    const easyCalcResult = () => {
        return count2 % 2 === 0 ? '偶数' : '奇数'
    }

    const addOne = () => setCount(previousCount => previousCount + 1)
    const addOne2 = useCallback(() => setCount2(previousCount => previousCount + 1), [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <HighlightCode
                codes={[{
                    title: '没有使用useMemo',
                    codeDesc: `
                    const complexCalcResult = () => {
                        let i = 0
                        while (i < Math.pow(100, 1000)) {
                            i++
                        }
                        return count % 2 ? '偶数' : '奇数'
                    }

                    即使点击简单计算奇偶数也会很慢计算出结果
                    `},
                {
                    title: '使用useMemo',
                    codeDesc: `
                    const complexCalcResult = useMemo(() => {
                        let i = 0
                        while (i < 4000000000) {
                            i++
                        }
                        return count % 2 === 0 ? '偶数' : '奇数'
                    }, [count])

                    点击简单计算奇偶数会很快计算出结果，和非常耗时的计算奇偶数区分开了
                    `}
                ]}
            />
            <Button type='primary' onClick={addOne}>非常耗时的计算奇偶数</Button>
            <span>{count}是{complexCalcResult}</span>
            <Button type='primary' onClick={addOne2}>简单计算奇偶数</Button>
            <span>{count2}是{easyCalcResult()}</span>
        </div>
    )
}

MemoComplexCalc.propTypes = {

}

export default MemoComplexCalc

