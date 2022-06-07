import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NavBar} from "./components/NavBar";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<TodosPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
