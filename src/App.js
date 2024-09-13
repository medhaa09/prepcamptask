import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PrimarySearchAppBar from './components/Appbar';

function App() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#f5f5f5' }}>
      <PrimarySearchAppBar sx={{ zIndex: 10000 }} />
      <Box sx={{ display: 'flex', height: 'calc(100% - 64px)' }}>
        <Sidebar sx={{ width: '8vw', flexShrink: 0 }} /> {/* Fixed width for Sidebar */}
        <Box sx={{ marginLeft:'3vw',flexGrow: 1, overflow: 'auto' }}> {/* Flexbox for Dashboard */}
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}



export default App;
