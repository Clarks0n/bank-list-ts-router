import AccountList from 'pages/account-list/AccountList';
import AccountListDetail from 'pages/account-list/AccountListDetail';

// const AccountList = lazy(() => import('pages/account-list/AccountList'));
// const AccountListDetail  = lazy(() => import('pages/account-list/AccountListDetail'));

const routes = [
  {
    path: '/account-list',
    element: <AccountList />
  },
  {
    path: '/account-list/:id',
    element: <AccountListDetail/>
  }
]

export default routes