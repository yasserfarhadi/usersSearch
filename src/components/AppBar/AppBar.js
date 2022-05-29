import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Yasser Farhadi
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
