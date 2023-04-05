//importamos los componentes para el blog
const Mostrar = () => import('./components/prod/Mostrar.vue')
const Crear = () => import('./components/prod/Crear.vue')
const Editar = () => import('./components/prod/Editar.vue')

export const routes = [
    {
        name: 'mostrarProds',
        path: '/prods',
        component: Mostrar
    },
    {
        name: 'crearProd',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarProd',
        path: '/editar/:id',
        component: Editar
    }
]