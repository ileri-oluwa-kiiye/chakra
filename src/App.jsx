import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './assets/components/home.jsx'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />}/> */}
        </Routes>
      </BrowserRouter>
  );
}



export default App;
