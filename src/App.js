import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './styles/index.scss';
import './styles/App.scss';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import {
  Home,
  About,
  CustomElements,
  CustomElementCss,
  DetectingTouch,
  TheDream,
  WhyDateTime,
  Loader
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
            <Route exact path='/' component={Home} />
            <Route exact path="/about"><About /></Route>

            {/* Blog */}
            <Route exact path="/blog/custom-element-css"><CustomElementCss /></Route>
            <Route exact path="/blog/custom-elements"><CustomElements /></Route>
            <Route exact path="/blog/detecting-touch"><DetectingTouch /></Route>
            <Route exact path="/blog/the-dream"><TheDream /></Route>
            <Route exact path="/blog/why-datetime"><WhyDateTime /></Route>
            <Route exact path="/blog/loader"><Loader /></Route>

            {/* 404 */}
            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
