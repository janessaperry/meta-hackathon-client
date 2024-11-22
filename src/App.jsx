import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage/ResultsPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ResultsPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
