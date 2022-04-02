import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';
import WatchClient from './pages/WatchClient';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" />} />
        <Route path="/customers" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<WatchClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
