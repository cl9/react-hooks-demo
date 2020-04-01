import React, { Component } from 'react'

export default class ClassDemo extends Component {
  componentDidMount(){
    if(this.timer){
      return 
    }

    this.timer = setTimeout(() => {
      this.setState({
        show: true
      })
    }, 2000);
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
