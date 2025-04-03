import { Suspense } from 'react'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import AboutUs from './pages/about-us/about-us'
import News from './pages/news/news'
import Colaborate from './pages/colaborate/colaborate'
import Programs from './pages/programs/programs.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/contact.tsx'

function App() {
      return (
        <Suspense>
          <>
            <BrowserRouter>
            <Navbar/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/news' element={<News/>} />
                    <Route path='/colaborate' element={<Colaborate/>} />
                    <Route path='/programs' element={<Programs/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='*' element={<Home/>}/>
                </Routes>
            <Footer/> 
            </BrowserRouter>
          </>
        </Suspense>
      )
}
export default App
