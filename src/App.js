import './App.css';
import Main from './Components/Main.js'
import WhoAmI from './Components/WhoAmI.js'
import { BrowserRouter, Route, Routes } from "react-router"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path='/WhoAmI' element={<WhoAmI />}/>
      </Routes>

    </BrowserRouter>
  );
}


export default App;
