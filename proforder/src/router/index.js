import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入一级组件
import Index from '../views/Index/Index.vue'
// 懒加载二级组件
const Home = () => import('@/views/Home/Home')
const Game = () => import('@/views/Game/Game')
const Puzzles = () => import('@/views/Game/Puzzles')
const Puzzle = () => import('@/views/Puzzle/Puzzle')
const Aboutus = () => import('@/views/Aboutus/Aboutus')
const Login = () => import('../views/Login/Login')
const Sign = () => import('../views/Sign/Sign')
const Search = () => import('../views/Search/Search')
const Userhome = () => import('../views/Userhome/Userhome')
const Puzzleintro = () => import('../views/Puzzleintro/Puzzleintro')
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    children: [

      {
        path: '/index',
        redirect: '/index/home',
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'game',
        component: Game,
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: 'puzzles',
        component: Puzzles,
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: 'puzzle',
        component: Puzzle,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'aboutus',
        component: Aboutus,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'login',
        component: Login,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'sign',
        component: Sign,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'search',
        component: Search,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'userhome',
        component: Userhome,
      },
      {
        path: 'puzzleintro',
        component: Puzzleintro,
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router