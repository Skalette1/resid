import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './media.css'
import Header from './header.jsx'
import Features from './assets/Features.jsx'
import Map from './Map.jsx'
import PhotoCarousel from './carusel.jsx'
import Rieltor from './Rieltor.jsx'
import RiverLine from './Riverline.jsx'
import Parkline from './Parkine.jsx'
import Lobby from './Lobby.jsx'
import Aparts from './Aparts.jsx'
import MainTest from './assets/Test.jsx/MainTest.jsx'
import Otdelka from './Otdelka.jsx'
import Variant from './assets/Varaints/Variant.jsx'
import Inteko from './assets/Inteco/Inteko.jsx'
import Kredit from './Kredit.jsx'
import Footer from './assets/Footer/Footer.jsx'
import App from './Popup.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>


    <Header />
    <Features />
    <Map />
    <PhotoCarousel />
    <Rieltor />
    <RiverLine />
    <Parkline />
    <Lobby />
    <Aparts />
    <MainTest />
    <Otdelka />
    <Variant />
    <Inteko />
    <Kredit />
    <Footer />
    <App />
  </StrictMode>
)
