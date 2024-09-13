import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import imageSrc from './rightColumnImg.png'; 

const Dbcard = () => {
  return (
    <Card sx={{ 
      margin: '20px', 
      padding: '30px', 
      display: 'flex', 
      backgroundColor: '#2bebc8', 
      color: 'black',
      boxSizing: 'border-box'
    }}>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%',
      }}>
        
        <Box sx={{ flex: '1 1 auto', paddingRight: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Welcome to our Dashboard
          </Typography>
          <Typography variant="body2" sx={{ wordWrap: 'break-word', textAlign:'left', color:'#2F2F33'}}>
            Try our new Admin Dashboard Template, built with live Ant-Design components. Customize it to your needs and release to production!
          </Typography>
        </Box>
        <Box sx={{ flex: '0 0 auto' }}>
          <img src={imageSrc} alt="Description" style={{ width: '200px', height: 'auto' }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Dbcard;
