import React from 'react';
import './index.css';
import App from './App';
import reportWebVitls from './reportWebVitals'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


const container= document.getElementById('root');
const root = createRoot(container)
root.render(<React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>)
reportWebVitls()
// const routing = (
//   <Router>
//     <div>
//       <ul>
//     <li><Link to="/">Graphlist</Link></li>
//     <li><Link to="/graphdetails">GraphDetails</Link></li>
//     </ul>
//       <Route exact path="/" element={graphList}/>
//       <Route exact path="/graphdetails" element={GraphDetails}/>
//     </div>
//   </Router>
// )
// React.ReactDOM(routing, document.getElementById("root"));
