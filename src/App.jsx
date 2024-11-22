import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {

  return (
    <>
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route
            path="/result"
            element={<ResultsPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
