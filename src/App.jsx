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
            <h1>Visual Search</h1>
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
