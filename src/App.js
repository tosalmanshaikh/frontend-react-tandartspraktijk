//please note that is version 5 from react-router-dom: you need to enter this in the terminal "npm install react-router-dom@v5" (only if you are using the update version)
// update version to follow with the new changes soon!

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';

function App() {
    return (
        <Router>
            <TopMenu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/gaatjes">
                    <CavitiesPage />
                </Route>
                <Route path="/afspraak-maken">
                    <AppointmentsPage />
                </Route>
                <Route path="/tanden-bleken">
                    <WhiteningPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;







//v6
// import React from 'react';
// import {Router, Routes, Route, Navigate } from 'react-router-dom';
// import TopMenu from './components/TopMenu';
// import HomePage from './pages/Home';
// import CavitiesPage from './pages/Cavities';
// import AppointmentsPage from './pages/Appointments';
// import WhiteningPage from './pages/Whitening';
// import './App.css';
// import Home from "./pages/Home";
// import { Link, useHistory } from 'react-router-dom';
//
//
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//
//             <TopMenu />
//
//
//                 <Route path="/" element={<HomePage />}/>
//                 <Route path="/gaatjes" element={<CavitiesPage />}/>
//                 <Route path="/afspraak-maken" element={<AppointmentsPage />}/>
//                 <Route path="/tanden-bleken/:productID" element={<WhiteningPage />}/>
//
//
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;