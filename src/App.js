import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './styles/index.scss';
import './styles/App.scss';

// Logo to appear in console
// import './scripts/auro-consoleLogo';

// Required for Auro Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// Accordion
import AuroAccordion from './content/dynamic/accordion/component';
import AuroAccordionApi from './content/dynamic/accordion/api';
import AuroAccordionInstall from './content/dynamic/accordion/install';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import {
  AuroHome,
  About,
  CustomElements,
  DetectingTouch,
  TheDream
} from './content/docsExport';

function App() {
  return (
    <main className="main-wrapper">
      <Header />
      <div className="wrapper">
        <input id="menuCheckbox" type="checkbox" className="menuCheckbox util_displayHiddenVisually"></input>
        <label htmlFor="menuCheckbox" className="menuCheckbox--label">
          <img className="menuIcon" src="https://img.icons8.com/material/24/000000/menu--v1.png" alt="icon"></img>
          <img className="closeIcon" width="24" src="https://img.icons8.com/material/26/000000/multiply--v1.png" alt="icon"></img>
        </label>

        <Router>
          <ScrollToTop />
          <SideNav />
          <Switch>

            {/* Home */}
            <Route exact path='/' component={AuroHome} />
            <Route exact path="/about"><About /></Route>

            {/* Blog */}
            <Route exact path="/blog/custom-elements"><CustomElements /></Route>
            <Route exact path="/blog/detecting-touch"><DetectingTouch /></Route>
            <Route exact path="/blog/the-dream"><TheDream /></Route>

            {/* accordion */}
            <Route exact path="/accordion/"><AuroAccordion /></Route>
            <Route exact path="/accordion/api"><AuroAccordionApi /></Route>
            <Route exact path="/accordion/install"><AuroAccordionInstall /></Route>

            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
