import { ReactElement } from 'react'
import Home from '../components/Home'
import Layout from '../components/layout/Layout'

export default function HomePage() {
  return <Home />
}

HomePage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Home'>{content}</Layout>
}
