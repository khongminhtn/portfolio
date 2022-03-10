import {
  Routes,
  Route
} from "react-router-dom"

// Data
import data from './data' 

// Components
import { Scrollable, NavBar, Social } from './components/index'
import { About, Landing, Projects } from './pages/index'
import { useStateValue } from "./state/context"

function App() {
  const { state } = useStateValue()
  const { currentPage } = state.scroll

  return (
    <Routes className="App">
      <Route path="/" element={
        <>
          <NavBar
            mainPages={['Landing', 'Projects', 'About', 'Hobby']}
            subPages={[0, 0, 0, 0]}/>
          <Social
            currentPage={currentPage}/> 
          <Scrollable>
            <Landing/>
            <Projects 
              pageNumber={1}
              heading={data.zoenail.heading}
              subHeading={data.zoenail.subHeading}
              paragraph={data.zoenail.paragraph}
              cta={data.zoenail.cta}
              asset={data.zoenail.asset}/>
            <About/>
          </Scrollable>
        </>}
      />
      
    </Routes>
  );
}

export default App;
