import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import TextView from './TextView'
import HighlightCode from '../../HighlightCode'

function MEMOReference(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(previousCount => previousCount + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    const cacheList = useMemo(() => {
        return [1, 3, 5, 7, 9].map(item => {
            return '缓存的' + item + '月'
        })
    }, [])

    const list = [1, 3, 5, 7, 9].map(item => {
        return item + '月'
    })

    const cacheObj = useMemo(() => {
        return {
            name: '缓存的lisa',
            age: 18
        }
    }, [])

    const obj = {
        name: 'lisa',
        age: 18
    }

    const cacheFunc = useMemo(() => {
        return () => {
            return '缓存的方法'
        }
    }, [])

    const func = () => {
        return '方法'
    }

    return (
        <div>
            <HighlightCode
                codes={[{
                    codeTitle: 'useMemo保持引用相等，防止不必要的重新渲染案例',
                    codeDesc: `
                    可以查看console信息，得出：
                    1. 如果传递的值是原始值string、boolean、null、undefined、
                    number都没有多次打印
                    2. 如果传递的值是object、array、函数等，不使用useMemo则有多次打印
                    `
                }]} />
            <TextView text={1} />
            <TextView text={'哈'} />
            <TextView text={true} />
            <TextView text={null} />
            <TextView text={undefined} />
            <TextView text={list} />
            <TextView text={cacheList} />
            <TextView text={obj} />
            <TextView text={cacheObj} />
            <TextView text={func} />
            <TextView text={cacheFunc} />
            <p style={{ marginTop: 20 }}>{count}秒过去了</p>
        </div>
    )
}

MEMOReference.propTypes = {

}

export default MEMOReference

