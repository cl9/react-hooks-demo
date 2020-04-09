export const navList = [{
    "mainTitle": "useState",
    "mainPath": "useState",
    "overview": 
    `
    const [state, setstate] = useState(initialState)
    `,
    "subTitles": [{
        "path": "/normal",
        "title": "一般的useState,直接修改state的值，且state为number、string、boolean等基本类型"
      },
      {
        "path": "/previousState",
        "title": "useState依赖于之前的state"
      },
      {
        "path": "/object",
        "title": "useState修改object"
      },
      {
        "path": "/array",
        "title": "useState修改array"
      }
    ]
  },
  {
    "mainTitle": "useEffect",
    "mainPath": "useEffect",
    "overview": 
    `
    useEffect(() => {
      effect
      return () => {
        cleanup
      }
    }, [input])
    `,
    "subTitles": [{
        "path": "/document",
        "title": "一般的useEffect,例如修改document标题,在React Class中会同时在componentDidMount和componentDidUpdate生命周期中修改"
      },
      {
        "path": "/timer",
        "title": "第一个参数带返回的useEffect,例如timer,在React Class中会在componentDidMount中设置timer,在componentWillUnmount生命周期中清除timer"
      },
      {
        "path": "/listener",
        "title": "useEffect调用次数"
      }
    ]
  },
  {
    "mainTitle": "useContext",
    "mainPath": "useContext",
    "overview": 
    `
    const context = useContext(contextValue)
    `,
    "subTitles": [{
      "path": "/shareData",
      "title": "React的Context用于嵌套组件(例如A->B->C)之间的传值"
    }]
  },
  {
    "mainTitle": "useReducer",
    "mainPath": "useReducer",
    "overview": 
    `
    const [state, dispatch] = useReducer(reducer, initialState, initAction)
    `,
    "subTitles": [{
        "path": "/basic",
        "title": "基础使用"
      },{
        "path": "/basic2",
        "title": "基础使用之使用第三个参数initialAction延迟state初始化，可以将用于计算state的逻辑提取到reducer外部"
      },{
        "path": "/complex",
        "title": "复杂的state变化之列表增删改"
      },{
        "path": "/complex2",
        "title": "复杂的state变化之网络请求"
      },
      {
        "path": "/withContext",
        "title": "与useContext结合实现react-redux的connect方法的效果"
      }
    ]
  },
  {
    "mainTitle": "useCallback",
    "mainPath": "useCallback",
    "overview": 
    `
    useCallback(
      () => {
        callback
      },
      [input],
    )
    `,
    "subTitles": [{
        "path": "/callback",
        "title": "减少callback引发的重新渲染"
      }
    ]
  },
  {
    "mainTitle": "useMemo",
    "mainPath": "useMemo",
    "overview": 
    `
    const cache = useMemo(() => function, input)

    应该使用 useMemo 的场景：
    1. 保持引用相等，防止不必要的重新渲染方面
    2. 成本很高的计算
    无需使用 useMemo 的场景
    1. 如果返回的值是原始值： string、boolean、null、undefined、
    number、symbol（不包括动态声明的 Symbol）
    2. 仅在组件内部用到的 object、array、函数等（没有作为 props 传递给子组件）
    ,且没有用到其他 Hook 的依赖数组中
    3. 根据更改的prop或值重新计算该值，如果是不需要在props更改时重新计算
    可以用useRef
    `,
    "subTitles": [
      {
        "path": "/complexCalc",
        "title": "缓存复杂耗时计算"
      },
      {
        "path": "/reference",
        "title": "保持引用相等，防止不必要的重新渲染方面"
      }
    ]
  },
  {
    "mainTitle": "useRef",
    "mainPath": "useRef",
    "overview": 
    `
    const ref = useRef(initialValue)
    `,
    "subTitles": [
      {
        "path": "/dom",
        "title": "保持DOM节点引用"
      },
      {
        "path": "/variable",
        "title": "保存一些值的引用，并对它进行读写"
      }
    ]
  }
]