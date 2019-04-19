function loadLayout (component) {
  return () => import(`layouts/${component}.vue`)
}

function loadPages (component) {
  return () => import(`pages/${component}.vue`)
}

const routes = [
  {
    path: '/login',
    component: loadLayout('Login'),
    children: [
      { path: '', component: loadPages('LoginForm') }
    ]
  },
  {
    path: '/',
    component: loadLayout('MyLayout'),
    children: [
      { path: '', component: loadPages('Index') },
      { path: '/user', component: loadPages('User') },
      { path: '/clientes', component: loadPages('Client') }
    ],
    meta: { requiresAuth: true }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: loadPages('Error404')
  })
}

export default routes
