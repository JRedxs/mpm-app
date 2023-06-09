import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function DenseAppBar() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#549fb3', 
      },
    },
  });

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
  <ThemeProvider theme={theme}>
  <AppBar position="static" style={{
  borderBottom: '1px solid transparent',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))',
  zIndex: 1301, 
  margin: 0,
  padding: 0,
  boxShadow: '0px 3px 5px 2px rgba(0,0,0,0.3)' 
}}>
      <Toolbar variant="dense" sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        </div>
        <Typography variant="h6" color="inherit" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>MPM APP</h2>
        </Typography>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2.5 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
</Box>

  );
}