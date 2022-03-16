import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

// Data
import data from './data' 

// Components
import { Scrollable, NavBar, NavBarMobile, Social } from './components/index'
import { About, Landing, Projects } from './pages/index'
import { useStateValue } from './state/context'

// Hooks
import { useMediaQuery } from './hooks/index'


function App() {
  const { state } = useStateValue()
  const { currentPage } = state.scroll
  const { pages } = state

  const isMax13L = useMediaQuery('(max-width: 927px)')
  const isMax13P = useMediaQuery('(max-width: 429px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const isLandscape = useMediaQuery('(orientation: landscape)')

  React.useEffect(() => {
  }, [])

  return (
    <Routes className="App">
      <Route path="/" element={
        <>
          {
            (isMax13P && isPortrait) || (isMax13L && isLandscape)
            ? <NavBarMobile/>
            : <NavBar
                mainPages={['Landing', 'Projects', 'About', 'Hobby']}
                subPages={[0, 0, 0, 0]}/>
          }
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
