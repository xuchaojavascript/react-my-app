import React from 'react'
import './App.css'
// import Clock from './core/clock'
// import Toggle from './core/toggle'
// import LoginControl from './core/loginControl'
// import NumberList from './core/numberList'
// import NameForm from './core/nameForm'
// import StatePromote from './core/statePromote'
import Combination from './core/combination'

function App() {
  // 时钟与组件独立渲染
  // return (
  //   <div>
  //     <Clock interval={1000}/>
  //     <Clock interval={2000}/>
  //     <Clock interval={3000}/>
  //   </div>
  // )

  // 事件处理
  // return (
  //   <Toggle />
  // )

  // 条件渲染 模拟登陆登出
  // return (
  //   <LoginControl /> 
  // )
  
  // 数组与key
  // return (
  //   <NumberList />
  // )

  // 表单
  // return (
  //   <NameForm />
  // )

  // 状态提升
  // return (
  //   <StatePromote />
  // )

  // 组合
  return (
    <Combination />
  )
}

export default App
