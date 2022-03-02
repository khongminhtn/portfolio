import {
  Routes,
  Route
} from "react-router-dom"
import { Landing, Projects } from './Pages/index'
import './App.css'

const Display = () => {
  return (
    <div
    className="app-display">
      <Landing/>
      <Projects/>
    </div>
  )
}

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Display/>}/>
    </Routes>
  );
}

export default App;
