import {
  Routes,
  Route
} from "react-router-dom"
import { Display } from './Components/index'
import { Landing, Projects} from './Pages/index'

function App() {
  return (
    <Routes className="App">

      <Route path="/" element={
        <Display>
          <Landing/>
          <Projects/>
        </Display>}
      />
      
    </Routes>
  );
}

export default App;
