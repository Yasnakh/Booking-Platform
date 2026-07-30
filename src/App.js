import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Flights from "./pages/flights/Flights";
import FlightTable from "./pages/flightTable/FlightTable";
import FlightSub from "./pages/flightSub/FlightSub";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Trains from "./pages/trains/Trains";
import TrainTable from "./pages/trainTable/TrainTable";
import TrainSub from "./pages/trainSub/TrainSub";
import Profile from "./pages/profile/Profile";
import HotelSub from "./pages/hotelSub/HotelSub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/flightTable" element={<FlightTable/>}/>
        <Route path="/flightSub" element={<FlightSub/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/trains" element={<Trains/>}/>
        <Route path="/trainTable" element={<TrainTable/>}/>
        <Route path="/trainSub" element={<TrainSub/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/hotelSub" element={<HotelSub/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
