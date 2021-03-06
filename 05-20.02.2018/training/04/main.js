// Плюсы: можем насоздавать много сторов, экшены для действий над данными, модель в каком то виде
// Минусы: сложно понять и принять концепцию экшенов и редъюсеров, пного писанины с AC и редъюсерами


const ADD_ITEM = 'ADD_ITEM'

class Store {

    constructor(defState){
        this.state = defState
        this.handlers = []
    }

    dispatch(action) {
        switch (action.type) {
            case ADD_ITEM:
                this.state = Object.assign({}, this.state)
                this.state.list = this.state.list.slice()
                this.state.list.push(action.payload)
                this.handlers.forEach(cb => cb())
                break
        }
    }

    getState(){
        return this.state
    }

    on(cb) {
        this.handlers.push(cb)
    }

    off(cb) {
        const i = this.handlers.indexOf(cb)
        if (i >= 0) {
            this.handlers.splice(i, 1)
        }
    }

}

// ACTION CREATOR

function addElement(id, text, done = false) {
    return {
        type: ADD_ITEM,
        payload: { id, text, done },
    }
}

const store = new Store({
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
})

const action = addElement(3, 'Vaasya3')
store.dispatch(action)

console.log(JSON.stringify(store.getState(), null, 4))


// В будущем, оно как то так будет использоваться
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
//
//
// export class Div extends Component {
//
//     static propTypes = {
//
//     };
//
//     constructor(props){
//         super(props)
//         store.on(this.storeChange)
//     }
//
//     storeChange = () => {
//         this.setState()
//     }
//
//     render () {
//         return (
//             <div>
//
//
//             </div>
//         )
//     }
//
//     componentWillUnmount() {
//         store.off(this.storeChange)
//     }
//
// }
