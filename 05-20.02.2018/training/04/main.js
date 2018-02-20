const ADD_ITEM = 'ADD_ITEM'

class Store {

    constructor(defState){
        this.store = defState

        // Пока события нам не нужны
        // this.handlers = []
    }

    dispatch(action) {
        switch (action.type) {
            case ADD_ITEM:
                this.store = Object.assign({}, this.store)
                this.store.list = this.store.list.slice()
                this.store.list.push(action.payload)
                // this.handlers.forEach(cb => cb())
                break
        }
    }

    getState(){
        return this.store
    }

    // on(cb) {
    //     this.handlers.push(cb)
    // }
    //
    // off(cb) {
    //     // ToDo
    // }

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
