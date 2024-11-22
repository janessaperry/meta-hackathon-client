import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route
            path="/result"
            element={<></>}
          />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
