import { useRoutes } from 'react-router-dom'
import Layout from 'layouts'
import { Protected } from './protected'
import { Public } from './public'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [...Public, ...Protected]
    }
  ])
  return routes
}

export default Routes
