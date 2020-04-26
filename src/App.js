import React from 'react';
import Container from '@material-ui/core/Container';


import './App.css';
import ItemsWrap from "./Components/ItemsWrap"

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <div className="MainListWrap">
          <ItemsWrap />
        </div>
      </Container>
    </div>
  );
}

export default App;
