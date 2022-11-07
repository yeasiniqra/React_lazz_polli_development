import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About';
import { useEffect } from 'react';
import { weatherInit } from './lib/weather';
import Footer from './components/Footer/Footer';
import Room from './pages/Room';
import RoomDetails from './components/RoomDetails/RoomDetails';
import Career from './pages/Career';
import Dine from './pages/Dine';
import Contact from './pages/Contact';
import Relax from './pages/Relax';
import Enjoy from './pages/Enjoy';
import Gallery from './pages/Gallery';
import RoomSearch from './pages/RoomSearch';
import CheckoutElement from './components/CheckoutElement/CheckoutElement';
import ErrorPage from './pages/ErrorPage';
import SuitsRoom from './pages/SuitsRoom';
import FullPackage from './components/FullPackage/FullPackage/FullPackage';
import Profile from './pages/Profile';
import OrderHistory from './components/Profile/OrderHistory/OrderHistory';
import Edit from './components/Profile/Edit/Edit';
import Auth from './Auth/Auth';
import Invoice from './components/Profile/Invoice/Invoice';



// import { HideInspect } from './lib/Hide';

function App() {
  const location = useLocation();

  useEffect(()=>{
    weatherInit(document, "script", "weatherwidget-io-js");
  }, []);

  // useEffect(() => {
  //   HideInspect() 
  // },[])

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route index element={<Home /> } />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/> } />
            <Route path="/room" element={<Room /> } />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/career" element={<Career /> } />
            <Route path="/dine" element={<Dine /> } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/relax" element={<Relax />} />
            <Route path="/enjoy" element={<Enjoy />} />
            <Route path="/gallery" element={ <Gallery />} />
            <Route path="/searchroom" element={ <RoomSearch />} />
            <Route path="/checkout" element={ <CheckoutElement />} />
            <Route path="/package" element={ <FullPackage />} />
            <Route path="/suits" element={ <SuitsRoom />} />
            <Route path="/profile" element={ <Profile />} >
              <Route path="order" element={<OrderHistory />} />
              <Route path="edit" element={<Edit />} />
              <Route path="inv" element={<Invoice />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
      <Footer /> 
      <Auth />
    </div>
  );
}

export default App;
