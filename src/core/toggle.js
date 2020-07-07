import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    // 为了在回调中使用 `this`，这个绑定是必不可少的  方法一必须这样写  方法二可以不这样写
    // this.handleClick = this.handleClick.bind(this);
  }

  // 方法一
  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }))
  // }

  // 方法二
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.isToggleOn ? '关闭' : '开启' }
      </button>
    ) 
  }
}

export default Toggle