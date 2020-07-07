import React from 'react'

// 使用es6方式来定义组件  
class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  // 挂载
  componentDidMount() {
    console.log(this.props.interval)
    this.timerID = setInterval(
      () => this.tick(),
      this.props.interval
    )
  }

  // 卸载
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

}

/**
 *  注意 ，setState属于异步
 *  所以这样赋值是错误的
 *  this.setState({
 *    counter: this.state.counter + this.props.increment,
 *  })
 *  这样才是正确的
 *  this.setState((state, props) => ({
 *    counter: state.counter + props.increment
 *  }))
 * 
 */

// 使用最简单的方式来定义组件, props需要从前面取
// function Clock (props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

export default Clock
