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
        "path": "/7",
        "title": "一般的useState,直接修改state的值，且state为number、string、boolean等基本类型"
      },
      {
        "path": "/8",
        "title": "useState依赖于之前的state"
      }
    ]
  }
]