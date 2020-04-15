import { Home } from './features/home/containers'
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
]

export default routes