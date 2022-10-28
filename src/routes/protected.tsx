import RequireAuth from './requireAuth'
import About from 'pages/About'

export const Protected = [
  {
    element: <RequireAuth />,
    children: [{ path: '/about', element: <About /> }]
  }
]
