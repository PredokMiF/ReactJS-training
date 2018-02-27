// Плюсы: все просто и понятно
// Минусы: синглтон (нельзя сождать много сторов), непонятно кто-когда-где и зачем меняет стор, нет структуры (кто как хочет, так и пишет в стор)


let state = {
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
}

state.list.push({ id: 3, text: 'Vasiliy2', done: true })

console.log(JSON.stringify(state, null, 4))
