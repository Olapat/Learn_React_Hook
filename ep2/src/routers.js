import { Home, NewHome } from './features/home/containers'
import { Form } from './features/form/containers'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/new-home",
    component: NewHome
  }
]

export default routes