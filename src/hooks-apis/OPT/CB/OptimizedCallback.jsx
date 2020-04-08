import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import RadioGroup from './RadioGroup'
import SexResultShow from './SexResultShow'
import OptionsResultShow from './OptionsResultShow'
import HighlightCode from '../../HighlightCode'

function OptimizedCallback() {
    const [option, setOption] = useState()
    const [sex, setSex] = useState('男')

    // const onItemClick = item => setOption(item)
    // const onSelect = value => setSex(value)

    const onItemClick = useCallback(item => setOption(item), [])
    const onSelect = useCallback(value => setSex(value), [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <HighlightCode
                codes={[{
                    title: '没有使用useCallback',
                    codeDesc: `
                    const onItemClick = item => setOption(item)
                    const onSelect = value => setSex(value)

                    console打印输出可以看到修改选项，与选项无关的RadioGroup组件会重新渲染
                    >>>>
                    Rendering OptionsResultShow
                    Rendering Options
                    Rendering RadioGroup
                    <<<<
                    `},
                    {
                    title: '使用useCallback',
                    codeDesc: `
                    const onItemClick = useCallback(item => setOption(item), [])
                    const onSelect = useCallback(value => setSex(value), [])

                    console打印输出可以看到修改选项，与选项无关的RadioGroup组件就不会再重新渲染，
                    且Options因为使用了useCallback也不再重新渲染
                    >>>>
                    Rendering OptionsResultShow
                    <<<<
                    `}
                ]}
            />
            <OptionsResultShow option={option} />
            <Spinner
                title='选项'
                onItemClick={onItemClick} />
            <SexResultShow sex={sex} />
            <RadioGroup
                onSelect={onSelect} />
        </div>
    )
}

OptimizedCallback.propTypes = {

}

export default OptimizedCallback

