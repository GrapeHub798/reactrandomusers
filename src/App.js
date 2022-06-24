import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AppTable from "./components/table/table";

function App() {
    useEffect(() => {

    })
  return (
    <div className="App">
        <Container>
            <Row>
                <AppTable/>
            </Row>
        </Container>
    </div>
  );
}

export default App;
