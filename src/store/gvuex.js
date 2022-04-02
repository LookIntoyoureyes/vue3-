import { computed, inject, reactive } from "vue";

const STORE_KEY = '__store__'

const useStore = () => {
    return inject(STORE_KEY)
}

const createStore = (options) => {
    return new Store(options)
}

class Store {
    constructor(option) {
        this._state = reactive({
            data: option.state()
        })
        this.getters = {}
        Object.keys(option.getters).forEach(name => {
            const fn = option.getters[name]
            this.getters = computed(() => fn(this.state))
        })
        this._mutations = option.mutations
        this.actions = option.actions
    }

    get state() {
        return this._state.data
    }
    commit(type, otherData) {
        const entry = this._mutations[type]
        entry && enter(this.state, otherData)
    }
    dispatch(type, otherData) {
        const entry = this.actions[type]
        return entry && entry(this, otherData)
    }
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export {
    useStore,
    createStore
}