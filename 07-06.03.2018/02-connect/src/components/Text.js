import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../store/connect'

import { addItem } from '../store/AC'


@connect(undefined, {
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
        // const addItemAction = addItem(Date.now(), this.state.text)
        // this.context.store.dispatch(addItemAction)
        this.props.addItem(Date.now(), this.state.text)

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
