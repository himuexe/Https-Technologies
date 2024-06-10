import { BrowserRouter as  Router, Routes , Route } from 'react-router-dom'
import { Layout } from "./layouts/Layout"
import { Homepage } from './pages/Homepage'
export default function Home() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Layout><Homepage/></Layout>}/>
    </Routes>
  </Router>
  )
}
