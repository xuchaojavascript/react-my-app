import React from 'react'

// 欢迎回来
function UserGreeting() {
  return <h1>Welcome back!</h1>
}

// 请登录
function GuestGreeting() {
  return <h1>Please sign up.</h1>
}

// 判断是否登陆
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// 按钮三目运算判断
function Button(props) {
  return (
    <button onClick={props.onClick}>
      { props.isLoggedIn ? 'Logout' : 'Login' }
    </button>
  )
}

class LoginControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // 切换登陆状态
  toggleLoginState = () => {
    this.setState( state => ({
      isLoggedIn: !state.isLoggedIn
    }) )
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <Button isLoggedIn={isLoggedIn} onClick={this.toggleLoginState}/>
      </div>
    )
  }

}

export default LoginControl