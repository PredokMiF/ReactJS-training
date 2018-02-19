let store = [
    { id: 1, text: 'Yo!',    done: false, },
    { id: 2, text: 'Vasya!', done: false, },
]

function storeProcess(store, action) {
    // ????
}

const action1 = {
    type: 'add',
    payload: { id: 3, text: '3333!', done: false, }
}
store = storeProcess(store, action1)

console.log(store)













//function storeProcess(store, action) {
//     switch (action.type) {
//         case 'add':
//             store = store.slice()
//             store.push(action.payload)
//             return store
//         case 'remove':
//             return store.filter(({ id }) => id !== action.payload.id)
//     }
//
//     return store
// }