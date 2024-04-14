import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/',component: () => import('./components/wellcome.vue'),},
        {path: '/cards',component: () => import('./components/cards.vue'),},
        //{path: '/cards/token',component: () => import('./components/cards/token.vue'),},
        {path: '/cards/addCard',component: () => import('./components/cards/addCard.vue'),},
        {path: '/cards/delCard',component: () => import('./components/cards/delCard.vue'),},
        {path: '/reserve',component: () => import('./components/reserve.vue')},
        {path: '/classroomManage',component: () => import('./components/manage.vue')},
        {path: '/classroomReserve',component: () => import('./components/apply.vue')}
    ],
})
