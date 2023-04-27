import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Program from '@/views/Program.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/program',
    name: 'Program',
    component: Program,
  },
]

export default routes
