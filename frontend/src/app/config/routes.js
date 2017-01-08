import DashboardPage from '../containers/pages/dashboard'
import UsersPage from '../containers/pages/users/index'
import NewUserPage from '../containers/pages/users/new'

const routes = [
  {
    pattern: '/',
    exactly: true,
    component: DashboardPage
  },

  // Resource Users
  {
    pattern: '/admin/users',
    exactly: true,
    component: UsersPage,
  },
  {
    pattern: '/admin/users/new',
    component: NewUserPage
  }
]

export default routes
