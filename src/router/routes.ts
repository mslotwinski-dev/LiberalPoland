import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Program from '@/views/Program.vue'
import Chapter from '@/views/Chapter.vue'

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
  {
    path: '/program/:id',
    name: 'Chapter',
    component: Chapter,
  },
]

export default routes
