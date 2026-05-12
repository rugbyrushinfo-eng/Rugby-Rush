/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Logs from './pages/Logs';
import Store from './pages/Store';
import Memes from './pages/Memes';
import { AppProvider } from './context/AppContext';
import AdminPortal from './pages/Admin';

// Placeholder Pages
const News = () => <div className="p-12 text-center h-[50vh]"><h1>News Coming Soon</h1></div>;
const Community = () => <div className="p-12 text-center h-[50vh]"><h1>Community Forum Coming Soon</h1></div>;

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/fixtures" element={<Fixtures />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/memes" element={<Memes />} />
                <Route path="/store" element={<Store />} />
                <Route path="/community" element={<Community />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}
