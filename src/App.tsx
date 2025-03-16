import { Suspense } from 'react'
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import AboutUs from './pages/about-us/about-us'
import News from './pages/news/news'
import Footer from './components/footer/footer'
import Colaborate from './pages/colaborate/colaborate'

function App() {
      return (
        <Suspense>
          <>
            <Navbar/>
            <Colaborate/>
            {/* <Home/>  */}
            {/* <AboutUs/> */}
            {/* <News/>  */}
            <Footer/> 
          </>
        </Suspense>
      )
}
export default App
