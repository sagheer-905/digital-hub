
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Porfolio from './Pages/Porfolio';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';
import WebDevelopment from './Pages/WebDevelopment';
import GraphicDesign from './Pages/GraphicDesign';
import ScoServices from './Pages/ScoServices';
import Digitalmarketing from './Pages/Digitalmarketing';
import Ecom from './Pages/Ecom';
import AppPage from './Pages/AppPage';
import PhotoEditing from './Pages/PhotoEditing';
import SocialMedia from './Pages/SocialMedia';
import ITNetworking from './Pages/ITNetworking';
import InfluencerServices from './InfluencerServices';
import Amazon from './Pages/Amazon';
import Ebay from './Pages/Ebay';
function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='*' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/servise' element={<Services/>}/>
    <Route path='/porfolio' element={<Porfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/webdevelopment' element={<WebDevelopment/>}/>
    <Route path='/graphicdesigin' element={<GraphicDesign/>}/>
    <Route path='/seoservices' element={<ScoServices/>}/>
    <Route path='/digitalmarketing' element={<Digitalmarketing/>}/>
    <Route path='/ecomserivce' element={<Ecom/>}/>
    <Route path='/apppage' element={<AppPage/>}/>
    <Route path='/photoeditng' element={<PhotoEditing/>}/>
    <Route path='/socialmedia' element={<SocialMedia/>}/>
    <Route path='/itnetworking' element={<ITNetworking/>}/>
    <Route path='/influencerservices' element={<InfluencerServices/>}/>
    <Route path='/amazonservices' element={<Amazon/>}/>
    <Route path='/ebayservices' element={<Ebay/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
