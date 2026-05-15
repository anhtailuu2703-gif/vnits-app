import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/layout'
import Home from './Pages/Home'
import SolutionDetail from './Pages/Solutions/SolutionDetail'
import ScrollToTop from './Components/ScrollToTop'
import ProjectSection from './Pages/Projects/projects'
import PartnerPage from './Pages/PartnerSection/PartnerPage'
import ContactPage from './Pages/ContactPage/ContactPage';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<Home />} />
          <Route path='/system/:slug' element={<SolutionDetail />} />
          <Route path='/projects' element={<ProjectSection />} />
          <Route path='/partners' element={<PartnerPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
