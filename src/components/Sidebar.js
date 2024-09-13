import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main, 
    color: 'rgba(255, 255, 255, 0.8)', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s ease', 
  },
  '&:first-child': {
    marginTop: 16,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'black', 
}));

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          color: 'black', 
          paddingTop: 6,
        },
      }}
    >
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Orders', icon: <ShoppingCartIcon /> },
          { text: 'Account', icon: <SettingsIcon /> },
          { text: 'Chat', icon: <ChatIcon /> },
          { text: 'FAQ', icon: <HelpIcon /> },
        ].map((item, index) => (
          <StyledListItem button key={index}>
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;