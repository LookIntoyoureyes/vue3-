import { createStore } from "./gindex";

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    getters: {
        dobule(state) {
            return state.count * 2
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {
        asyncAdd({ commit }) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        }
    }
})

export default store