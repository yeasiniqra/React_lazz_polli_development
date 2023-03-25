import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Room from './pages/Room';
import RoomDetails from './components/RoomDetails/RoomDetails';
import Career from './pages/Career';
import Dine from './pages/Dine';
import Contact from './pages/Contact';
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
import Convention from './pages/Convention';
import SwimmingPool from './pages/SwimmingPool';
import SuitsAndRoomDetails from './components/SuitsAndRoomDetails/SuitsAndRoomDetails';
import Success from './pages/Success';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// import { HideInspect } from './lib/Hide';

function App() {
  const location = useLocation();
  // useEffect(() => {
  //   HideInspect() 
  // },[])



  useEffect(() => {
    if (location.pathname === "/checkout" || location.pathname === "/convention" || location.pathname === "/swimmingpool" || location.pathname === "/package" || location.pathname === "/dine") {
      window.scrollTo({ top: 320, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route index element={<Home /> } />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/> } />
            <Route path="/room" element={<Room /> } />
            <Route path="/room/:Id" element={<RoomDetails />} />
            <Route path="/career" element={<Career /> } />
            <Route path="/dine" element={<Dine /> } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/swimmingpool" element={<SwimmingPool />} />
            <Route path="/convention" element={<Convention />} />
            <Route path="/gallery" element={ <Gallery />} />
            <Route path="/searchroom" element={ <RoomSearch />} />
            <Route path="/checkout" element={ <CheckoutElement />} />
            <Route path="/package" element={ <FullPackage />} />
            <Route path="/suits" element={ <SuitsRoom />} />
            <Route path="/Booking/Status" element={ <Success />} />
            <Route path="/privacypolicy" element={ <PrivacyPolicy />} />
            <Route path="/termsconditions" element={ <TermsConditions />} />
            <Route path="/suits/:Id" element={ <SuitsAndRoomDetails />} />
            <Route path="/profile/*" element={ <Profile />} >
              <Route path="order" element={<OrderHistory />} />
              <Route path="order/:Code" element={<Invoice />} />
              <Route path="edit" element={<Edit />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
      <Footer /> 
      <Auth />
    </div>
  );
}

export default App;
