import Landing from '../pages/Landing';
import Home from '../pages/index';
import AddNew from '../pages/new';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import ResetPassword from '../pages/auth/reset';
import ResetPasswordStatus from '../pages/auth/resetStatus';
import Help from '../pages/Help';
import ViewTodo from '../pages/View';
import NoMatch from '../pages/NoMatch';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/landing',
    component: Landing,
  },
  {
    path: '/new',
    component: AddNew,
  },
  {
    path: '/auth/register',
    component: Register,
  },
  {
    path: '/auth/login',
    component: Login,
  },
  {
    path: '/auth/reset-password',
    component: ResetPassword,
  },
  {
    path: '/auth/reset-password-status',
    component: ResetPasswordStatus,
  },
  {
    path: '/help',
    component: Help,
  },
  {
    path: '/todo/:id',
    component: ViewTodo,
  },
  {
    path: '*',
    component: NoMatch,
  },
];

export default routes;
