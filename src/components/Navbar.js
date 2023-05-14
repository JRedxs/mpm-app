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
        <Toolbar variant="dense" sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/*<img src="/mpm-app/src/img/" alt="" style={{ height: '24px', marginRight: '8px' }} />*/}
          </div>
          <Typography variant="h6" color="inherit" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>MPM APP</h2>
          </Typography>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 2.5 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
