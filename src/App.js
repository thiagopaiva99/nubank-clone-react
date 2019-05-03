import React from 'react';

import './App.scss';

import Layout from './components/Layout';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <main>
      <Layout>
        <BottomNavigation />
      </Layout>
    </main>
  );
}

export default App;
