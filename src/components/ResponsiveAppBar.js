import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TemporaryDrawer from './TemporaryDrawer';
import { Link } from 'react-router-dom';

const pages = [
  { name: "HomePage", path: "/" },
  { name: "Il Giardino", path: "il-giardino" },
  { name: "Il Percorso Virgiliano", path: "il-percorso-virgiliano" },
  { name: "Le Schede Botaniche", path: "le-schede-botaniche" }
];

export default function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <TemporaryDrawer pages={pages}></TemporaryDrawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button>
                <Link to={page.path}> {page.name}</Link>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
