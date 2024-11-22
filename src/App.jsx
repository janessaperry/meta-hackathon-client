import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage/ResultsPage.jsx";
import { useState } from "react";
import "./App.scss";
import MenuModal from "./components/MenuModal/MenuModal";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMoreIconClick = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ResultsPage />} />
                </Routes>
            </BrowserRouter>
            {/* Temporary meatball icon for modal testing */}
            <span
                className="material-icons"
                onClick={() => handleMoreIconClick()}
            >
                more_vert
            </span>
            <MenuModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
        </>
    );
}

export default App;
