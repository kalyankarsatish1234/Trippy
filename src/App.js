// import logo from "./logo.svg";

import "./App.css";
import Container_Nav_Options from "./component/Navigation_Options/Container_Nav_Options";
import PopularDesitnationTray from './component/PopularDesitnationTray';

import Offer from "./component/Offer";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login23";

function App() {
  return (
    <div className="App">
     {/* <h1>Trippy_Home</h1> */}
    
      <Header/>
     
      <Container_Nav_Options></Container_Nav_Options>
      
      <Offer/>
      <PopularDesitnationTray/>
      <Footer />

    </div>
  );
}

export default App;
