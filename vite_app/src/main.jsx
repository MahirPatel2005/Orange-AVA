import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './nav.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Books from './Books.jsx';
import Services from './Services.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Books />
    <Services />
    <Blog />
    <Contact />
    <Footer />
    {/* <Navbar />
    <App /> */}
  </StrictMode>,
)
