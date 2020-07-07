import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// const name = 'Josh Perez'
// const element = <h1>Hello, {name}</h1>
// const elementTwo = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello world'
// )

ReactDOM.render(
  // 严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // element,
  // elementTwo,
  // <h1>Hello, world!</h1>,
  document.getElementById('root')
);
// let num = 1
// function tick() {
//   num += 1
//   const element = (
//     <div>
//       <h1>{num}</h1>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
