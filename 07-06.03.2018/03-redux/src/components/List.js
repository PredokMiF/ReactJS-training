import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// function transform(state) {
//     return {
//         list: state.list
//     }
// }
//
// const transform_2 = state => {
//     return {
//         list: state.list
//     }
// }
//
// const transform_3 = state => ({
//     list: state.list
// })

@connect(state => ({
    list: state.list,
}))
export class List extends Component {

    render () {
        const { list } = this.props

        return (
            <div>
                {list.map(item => <div key={item.text}>{item.text}</div>)}
            </div>
        )
    }
}
