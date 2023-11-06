import "./assets/style/index.scss"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./Main";


function App() {
  return (
      <BrowserRouter basename={window.location.pathname || ""}>
          <Routes>
              <Route path="/" element={<Main />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
