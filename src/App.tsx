import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              This app now uses Material-UI
            </Typography>
          </Box>
        </Container>
      </header>
    </div>
  );
}

export default App;
