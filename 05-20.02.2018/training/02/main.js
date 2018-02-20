// Плюсы: все просто и понятно, появились методы для конкретных методов работы с данными, модель в каком то виде
// Минусы: синглтон, непонятно кто-когда-где и зачем меняет стор


let store = {
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
}

function addElement(store, id, text, done = false) {
    store = Object.assign({}, store)
    store.list = store.list.slice()
    store.list.push({ id, text, done })
    return store
}

store = addElement(store, 3, 'Vasiliy3')

console.log(JSON.stringify(store, null, 4))
