import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

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
  const { pages, projects, scroll } = state
  const { currentPage } = scroll

  // PROPS
  const projectProps = {
    heading: projects.cocktailNails.heading,
    subHeading: projects.cocktailNails.subHeading,
    paragraphs: [projects.cocktailNails.paragraph],
    src: projects.cocktailNails.asset,
    alt: projects.cocktailNails.alt,
    href: projects.cocktailNails.href
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
