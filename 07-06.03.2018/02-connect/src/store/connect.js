import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { getDisplayName } from './util'


export const connect = (foo = state => ({}), acs = {}) => WrappedComponent => {

    class WrapperComponent extends Component {

        static contextTypes = {
            store: PropTypes.any.isRequired,
        };

        render() {
            const self = this
            const state = this.context.store.getState()
            const values = foo(state)

            const newAcs = Object.keys(acs).reduce((out, key) => {
                const ac = acs[key]

                out[key] = function () {
                    return self.context.store.dispatch(ac.apply(null, arguments))
                }

                return out
            }, {})

            return <WrappedComponent {...values} {...newAcs} {...this.props}/>
        }

    }

    WrapperComponent.displayName = `connect(${getDisplayName(WrappedComponent)})`;

    return WrapperComponent
}
