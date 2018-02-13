import React from "react";
import { render } from "react-dom";
import { Calc } from './Calc'
import './style.less'

render(
    <Calc/>,
    document.getElementById('app')
)
