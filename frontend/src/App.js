import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Pemilik from './pages/Pemilik';
import RumahKost from './pages/RumahKost';
import AddPemilik from "./pages/AddPemilik";
import EditPemilik from "./pages/EditPemilik";
import AddRumahKost from './pages/AddRumahKost';
import EditRumahKost from './pages/EditRumahKost';
import HomePage from "./pages/HomePage";
import DetailKost from "./pages/DetailKost";
import ListKost from './pages/ListKost';
import PusatBantuan from "./pages/PusatBantuan";
import TentangKami from "./pages/TentangKami";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Pemilik/>}/>
        <Route path="/users/add" element={<AddPemilik/>}/>
        <Route path="/users/edit/:id" element={<EditPemilik/>}/>
        <Route path="/rumah-kost" element={<RumahKost/>}/>
        <Route path="/rumah-kost/add" element={<AddRumahKost/>}/>
        <Route path="/rumah-kost/edit/:id" element={<EditRumahKost/>}/>
      </Routes>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/detail-kost" element={<DetailKost/>}/>
        <Route path="/kost-list" element={<ListKost/>}/>
        <Route path="/pusat-bantuan" element={<PusatBantuan/>}/>
        <Route path="/tentang-kami" element={<TentangKami/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;