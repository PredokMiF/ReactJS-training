import React, { Component } from 'react'
import { Btn } from './Btn'


export class Calc extends Component {

    state = {
        a: undefined,
        action: undefined,
        b: '0',
    }

    btnHandler = btnAction => {
        let { a, b, action } = this.state

        switch (btnAction) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (a) {
                    // Для выполнения последовательных операций мы должны применить последнюю операцию
                    // и отобразить только что нажатую
                    b = (new Function(`return ${a} ${action || btnAction} ${b}`))()
                }
                this.setState({
                    a: b,
                    action: btnAction,
                    b: '0',
                })
                return
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({ b: Number(b + btnAction).toString()})
                return
            case '=':
                b = (new Function(`return ${a} ${action} ${b}`))()
                this.setState({
                    a: undefined,
                    action: undefined,
                    b,
                })
                return
            case 'c':
                this.setState({
                    a: undefined,
                    action: undefined,
                    b: '0',
                })
                return
        }
    }

    keyHandler = e => {
        let key = e.key

        if (key === 'Enter') {
            key = '='
        } else if (key === 'Escape') {
            key = 'c'
        }

        if (['/', '*', '-', '+', '='].includes(key)) {
            this.btnHandler(key)
        }
    }

    typingHandler = () => {
        const text = e.target.value
        if (text.match(/^\d*$/)) {
            this.setState({ b: Number(text).toString() })
        } else {
            return false
        }
    }

    render () {
        const { a, b, action } = this.state

        return (
            <table className="calc">
                <tbody>
                <tr>
                    <td colSpan="4" className="label-text">&nbsp;{a}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="label-text">&nbsp;{action}</td>
                </tr>
                <tr>
                    <td colSpan="4"><input id="digit" value={b} className="input-digit" onKeyDown={this.keyHandler} onChange={this.typingHandler}/></td>
                </tr>

                <tr>
                    <td><Btn action="1" handler={this.btnHandler}/></td>
                    <td><Btn action="2" handler={this.btnHandler}/></td>
                    <td><Btn action="3" handler={this.btnHandler}/></td>
                    <td><Btn action="c" handler={this.btnHandler} className="action"/></td>
                </tr>

                <tr>
                    <td><Btn action="4" handler={this.btnHandler}/></td>
                    <td><Btn action="5" handler={this.btnHandler}/></td>
                    <td><Btn action="6" handler={this.btnHandler}/></td>
                    <td><Btn action="+" handler={this.btnHandler} className="action"/></td>
                </tr>

                <tr>
                    <td><Btn action="7" handler={this.btnHandler}/></td>
                    <td><Btn action="8" handler={this.btnHandler}/></td>
                    <td><Btn action="9" handler={this.btnHandler}/></td>
                    <td><Btn action="-" handler={this.btnHandler} className="action"/></td>
                </tr>

                <tr>
                    <td><Btn action="*" handler={this.btnHandler} className="action"/></td>
                    <td><Btn action="0" handler={this.btnHandler}/></td>
                    <td><Btn action="/" handler={this.btnHandler} className="action"/></td>
                    <td><Btn action="=" handler={this.btnHandler} className="action"/></td>
                </tr>
                </tbody>
            </table>
        )
    }

}

class A {
    name = 'A'
    f1 = function () {
        console.log(this)
    }
    f2 = () => {
        console.log(this)
    }
}
const a = new A()

a.f1(); // { name: 'A', f1, f2 }
a.f2(); // { name: 'A', f1, f2 }

const foo1 = a.f1
const foo1_ = a.f1.bind(a)
const foo2 = a.f2

foo1() // null
foo1.call(a) // { name: 'A', f1, f2 }
foo1_() // { name: 'A', f1, f2 }
foo2() // { name: 'A', f1, f2 }

function bind(f, a) {
    return function () {
        f.call(a)
    }
}

const _f = bind(a.f1, a)