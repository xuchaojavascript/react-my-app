// 受控组件
// 唯一数据源是state 随着用户输入，不断更新state，并将value不断更新
import React from 'react'

class NameForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      textValue: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
      selectValue: 'coconut'
    }
  }
  handleChange(event, key) {
    // 也可通过event.target.name来进行获取数据，然后定义
    // 注意： 不一定每一个都是取value有的取checked
    this.setState({
      [key]: event.target.value
    })
    event.preventDefault()
  }

  handleSubmit = () => {
    alert(
      '名字: ' + this.state.inputValue + 
      '文章: ' + this.state.textValue + 
      '风味: ' + this.state.selectValue
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type="text" value={this.state.inputValue} onChange={(event) => this.handleChange(event, 'inputValue')} />
        </label>
        <br />
        <label>
          文章：
          <textarea value={this.state.textValue} onChange={(event) => this.handleChange(event, 'textValue')} />
        </label>
        <br />
        <label>
          风味：
          <select value={this.state.selectValue} onChange={(event) => this.handleChange(event, 'selectValue')}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
          {/* 多选
            <select multiple={true} value={['B', 'C']}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select> */}
        </label>
        <br />
        <input type="submit" value="提交" />
      </form>
    )
  }

}

export default NameForm