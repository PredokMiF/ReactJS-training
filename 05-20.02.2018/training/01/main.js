// Плюсы: все просто и понятно
// Минусы: синглтон, непонятно кто-когда-где и зачем меняет стор, нет структуры - кто как хочет, так и пишет в стор


let store = {
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
}

store.list.push({ id: 3, text: 'Vasiliy2', done: true })

console.log(JSON.stringify(store, null, 4))
