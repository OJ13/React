import "./App.css"
import React from "react";
import Menu from "../components/layouts/Menu"
import Content from "../components/layouts/Content"
import { BrowserRouter as Router } from 'react-router-dom'
const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)

export default App