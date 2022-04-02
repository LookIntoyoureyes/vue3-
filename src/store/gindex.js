import { inject, reactive, computed } from "vue";

const STORE_KEY = '__store__'
function useStore() {
    return inject(STORE_KEY)
}
function createStore(options) {
    return new Store(options)
}
class Store {
    constructor(option) {
        // this.$options = option
        this._state = reactive({
            data: option.state()
        })
        this._mutations = option.mutations
        this.getters = {}
        Object.keys(option.getters).forEach(name => {
            const fn = option.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        });
        this._action = option.actions
    }
    get state() {
        return this._state.data
    }
    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }
    dispatch = (type, payload) => {
        const entry = this._action[type]
        console.log(this, payload)
        return entry && entry(this, payload)
    }
    install(app) {
        app.provide(STORE_KEY, this)
    }
}
export { createStore, useStore }