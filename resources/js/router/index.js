import { createRouter, createWebHistory } from 'vue-router'

import Productsindex from '../components/products/Productsindex.vue'
import ProductsCreate from '../components/products/ProductsCreate.vue'
import ProductsEdit from '../components/products/ProductsEdit.vue'
const routes = [
    {
        path: '/dashboard',
        name: 'productsindex',
        component: Productsindex
    },
    {
        path: '/products/create',
        name: 'productscreate',
        component: ProductsCreate
    },
    {
        path: '/products/:id/edit',
        name: 'productsedit',
        component: ProductsEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})