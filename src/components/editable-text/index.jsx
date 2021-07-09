import React, { Component } from 'react'
import './index.css'

export default class EditableText extends Component {

    // 定义state
    state = {
        // 是否处于编辑状态
        editing: false,
        value: this.props.value,
    }

    handleClick = () => {
        this.setState({
            editing: true,
            value: this.props.value,
        })
    }

    handleSubmit = (event) => {
        // 阻止当前表单的提交
        event.preventDefault();
        this.handleBlur()
    }

    handleBlur = () => {
        console.log(this.props);
        this.state.value !== ''
            ? this.props.onBlur(this.state.value)
            : this.setState({ value: this.props.value })
        this.setState({
            editing: false
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    // 让焦点到input内
    focusInput = () => {
        this.textInput.focus()
        // 所以用focus只是有焦点，但用select 会选中该文本框里的所有文本
        this.textInput.select()
    }

    // 当点击后需要预先把焦点放入修改框input中，而不是再次点击才能进入
    componentDidUpdate(preProps, preState) {
        // 如果上一次的state中editing是false并且这次是true
        if (!preState.editing && this.state.editing) {
            this.focusInput()
        }
    }

    render() {
        // 为什么更新过后state没有变
        const { value, title } = this.props
        const { editing } = this.state

        // 如果处于编辑状态
        if (editing) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name='input'
                        title={title}
                        className='editable-text editable-text-input'
                        // value={value}
                        value={this.state.value}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        ref={input => { this.textInput = input }}
                    />
                </form>
            )
        } else {
            return (
                <div
                    className="editable-text editable-text-div"
                    onClick={this.handleClick}
                >
                    <span title={title}>{value}</span>
                </div>
            )
        }
    }
}
