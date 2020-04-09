import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import RadioGroup from './RadioGroup'
import {
    Button
} from 'antd'
import HighlightCode from '../HighlightCode'

function URFDom(props) {
    const sexRef = useRef(null)
    const educationRef = useRef(null)
    const levelRef = useRef(null)

    const [result, setResult] = useState()

    const onSubmit = () => {
        setResult(`性别：${sexRef.current.getItem()} 学历：${educationRef.current.getItem()} 级别：${levelRef.current.getItem()}`)
    }

    return (
        <div>
            <HighlightCode
                codes={[{
                    titile: '',
                    codeDesc: `
                    <RadioGroup ref={sexRef} list={['男', '女']} />

                    console.log(性别：\${sexRef.current.getItem()})
                    `
                }]}
            />
            <h2>性别</h2>
            <RadioGroup ref={sexRef} list={['男', '女']} />
            <h2>学历</h2>
            <RadioGroup ref={educationRef} list={['中专', '大专', '本科', '硕士', '博士']} />
            <h3>级别</h3>
            <RadioGroup ref={levelRef} list={['初级', '中级', '高级', '专家']} />
            <Button style={{ display: 'block', marginTop: 20 }} onClick={onSubmit}>提交</Button>
            <p>{result}</p>
        </div>
    )
}

URFDom.propTypes = {

}

export default URFDom

