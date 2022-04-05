import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

// Data
import data from './data' 

// Hooks
import { useStateValue } from './state/context'
import useSetMedia from './hooks/useSetMedia'

// Components
import { Scrollable, NavBar, Social, Header } from './components/index'
import { About, Landing, Projects } from './views/index'

// Assets
import zoenail from './assets/zoenail.png'
import styles from './App.style.js'


function App() {
  const media = useSetMedia()
  const { state } = useStateValue()
  const { pages } = state
  const { currentPage } = state.scroll

  // PROPS
  const projectProps = {
    subject: 'PROJECTS',
    heading: data.zoenail.heading,
    subHeading: data.zoenail.subHeading,
    paragraphs: [data.zoenail.paragraph],
    src: zoenail,
    alt: 'zoenail',
    href: 'https://www.zoenail.com'
  }

  const projectTextProps = {
    content: 'PROJECTS',
    style: styles.projectText(media, pages, currentPage)
  }

  const navBarProps = {
    mainPages: ['Landing', 'Projects', 'About'],
    subPages: [0, 0, 0]
  }

  // CONDITIONAL COMPONENTS
  const cNavBar = media.phone.large.portrait || media.phone.large.landscape
  ? null
  : <NavBar {...navBarProps}/>

  return (
    <Routes className="App">
      <Route 
        path="/" 
        element={
          <>
            { cNavBar }
            <Social currentPage={currentPage}/> 
            <Header {...projectTextProps}/> 
            <Scrollable>
              <Landing/>
              <Projects {...projectProps}/>
              <About/>
            </Scrollable>
          </>
        }
      />
    </Routes>
  );
}

export default App;
