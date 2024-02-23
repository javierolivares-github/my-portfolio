import { BrowserRouter, Routes } from 'react-router-dom';
import '/src/index.css';
import { renderRoutes } from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App
