// Плюсы: все просто и понятно, можем насоздавать много сторов, методы для действий над данными, модель в каком то виде
// Минусы: Если создавать по методу на каждое действие в сторе - быстро вылетим за тысячу строк


class Store {

    constructor(defState){
        this.state = defState
    }

    addElement(id, text, done = false) {
        this.state = Object.assign({}, this.state)
        this.state.list = this.state.list.slice()
        this.state.list.push({ id, text, done })
    }

    getState(){
        return this.state
    }
}

const store = new Store({
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
})

store.addElement(3, 'Vasiliy3')

console.log(JSON.stringify(store.getState(), null, 4))
