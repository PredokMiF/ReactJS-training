import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { itemReducer } from './store/reducers'
import { List } from './components/List'
import { Text } from './components/Text'


const store = createStore(itemReducer, {
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
})

export class App extends Component {

    render () {
        return (
            <Provider store={store}>
                <div>
                    <Text/>
                    <List/>
                </div>
            </Provider>
        )
    }

}