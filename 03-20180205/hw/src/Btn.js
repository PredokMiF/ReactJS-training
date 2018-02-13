import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export class Btn extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        action: PropTypes.string.isRequired,
        handler: PropTypes.func.isRequired,
        className: PropTypes.string,
    }

    static defaultProps = {
        className: '',
    }

    clickHandler = () => {
        const { action, handler } = this.props

        handler(action)
    }

    render () {
        const { label, action, className } = this.props

        return (
            <button onClick={this.clickHandler} className={`${className}  calc-btn`}>{label || action}</button>
        )
    }
}
