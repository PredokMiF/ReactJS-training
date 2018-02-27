// Плюсы: все просто и понятно, появились методы для конкретных методов работы с данными, модель в каком то виде
// Минусы: синглтон (нельзя сождать много сторов), непонятно кто-когда-где и зачем меняет стор


let state = {
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
}

function addElement(state, id, text, done = false) {
    state = Object.assign({}, state)
    state.list = state.list.slice()
    state.list.push({ id, text, done })
    return state
}

state = addElement(state, 3, 'Vasiliy3')

console.log(JSON.stringify(state, null, 4))
