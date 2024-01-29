import logo from './logo.svg';
import Login from "./Login";
import {Route,Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
