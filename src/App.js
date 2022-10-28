import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuSettings } from "./MenuSettings";
import { routes } from "./routes";
import { Body } from "./Body";
import { Home } from "./pages/Home";

const drawerWidth = 240;

export default function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <MenuSettings />
        </Drawer>
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
        <Toolbar />
          <Routes>
            <Route exact path="/" element={<Body label={Home}/>}></Route>
            {routes.map((item) => {
              return (
                <Route path={item.path} key={JSON.stringify(item)} element={<Body label={item.Component}/>}></Route>
              );
            })}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
