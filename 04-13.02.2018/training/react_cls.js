import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'


export class Input extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        arr: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps = {}

    state = {}

    constructor(props, context){
        super(props, context)
    }
    componentWillMount() {}
    // render
    clickHandler = e => {}
    componentDidMount() {
        $('#input').on('click', this.clickHandler)
    }

    componentWillReceiveProps(nextProps) {}
    shouldComponentUpdate(nextProps, nextState) {}
    componentWillUpdate(nextProps, nextState) {}
    // render
    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {
        q.r.t=1
        $('#input').off('click', this.clickHandler)
    }

    componentDidCatch(error, info) {}

    // this.setState()
    // this.forceUpdate()

    render () {
        return (
            <div>


            </div>
        )
    }

}


class  extends React.Component {



}