import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addItem } from '../store/AC'


@connect(null, {
    addItem: addItem
})
export class Text extends Component {

    state = {
        text: ''
    }

    onTyping = e => {
        this.setState({ text: e.target.value })
    }

    submit = () => {
        this.props.addItem(Date.now(), this.state.text)

        // const addItemAction = addItem(Date.now(), this.state.text)
        // this.context.store.dispatch(addItemAction)
        this.setState({ text: '' })
    }


    render () {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onTyping}/>
                <button onClick={this.submit}>Отправить</button>
            </div>
        )
    }

}
