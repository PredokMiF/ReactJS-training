import React, { Component } from 'react'
import PropTypes from "prop-types";

import { getDisplayName } from './util'


export const hoc = (
    WrappedComponent => {

        class WrapperComponent extends Component {

            render() {
                return <WrappedComponent {...this.props}/>
            }

        }

        WrapperComponent.displayName = `hoc(${getDisplayName(WrappedComponent)})`;

        return WrapperComponent
    }
);
