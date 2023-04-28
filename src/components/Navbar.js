import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function DenseAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <div>
            <img src="../public/img/gestionprojet.png" alt="Logo" style={{ height: '24px', marginRight: '8px' }} />
            <Typography variant="h6" color="inherit" component="div" sx={{ display: 'inline' }}>
              Projet MPM
            </Typography>
          </div>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 2.5 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
