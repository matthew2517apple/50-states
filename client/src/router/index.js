import Router from 'vue-router'

import StateList from '@/components/StateList'

export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        }
    ]
})