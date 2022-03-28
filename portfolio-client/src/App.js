import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

// Data
import data from './data' 

// Components
import { Scrollable, NavBar, NavBarMobile, Social } from './components/index'
import { About, Landing, Projects } from './views/index'
import { useStateValue } from './state/context'

// Hooks
import useMediaQuery from './hooks/useMediaQuery'


function App() {
  const { state } = useStateValue()
  const { currentPage } = state.scroll

  const largePhoneL = useMediaQuery('(max-width: 927px)')
  const largePhoneP = useMediaQuery('(max-width: 429px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const isLandscape = useMediaQuery('(orientation: landscape)')
  
  return (
    <Routes className="App">
      <Route path="/" element={
        <>
          {
            (largePhoneP && isPortrait) || (largePhoneL && isLandscape)
            ? <NavBarMobile/>
            : <NavBar
                mainPages={['Landing', 'Projects', 'About']}
                subPages={[0, 0, 0]}/>
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
