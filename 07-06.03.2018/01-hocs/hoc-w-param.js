import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { getDisplayName } from './util'


export const myHocWParams = (param_1, param_2) =>
    WrappedComponent => {

        class WrapperComponent extends Component {

            render() {
                return <WrappedComponent {...this.props}/>
            }

        }

        WrapperComponent.displayName = `myHocWParams(${getDisplayName(WrappedComponent)})`;

        return WrapperComponent
    }
;
