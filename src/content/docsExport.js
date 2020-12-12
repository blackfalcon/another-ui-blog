// DO NOT EDIT! 
// This doc was auto generated from ./src/scripts/build-page-imports.js 
// Fri Dec 11 2020 18:29:23 GMT-0800 (Pacific Standard Time)
      
// Import primary markdown tools
import {InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';
      
// internal markdown docs
import CustomElementsPage from './static/blog/custom-elements.md'; 
import DetectingTouchPage from './static/blog/detecting-touch.md'; 
import TheDreamPage from './static/blog/the-dream.md'; 
import WhyDateTimePage from './static/blog/why-date-time.md'; 
import AboutPage from './static/general/about.md'; 
import HomePage from './static/home.md'; 

      
// internal markdown docs
export class CustomElements extends InternalMarkdownWrapper {
  readme = CustomElementsPage
}

export class DetectingTouch extends InternalMarkdownWrapper {
  readme = DetectingTouchPage
}

export class TheDream extends InternalMarkdownWrapper {
  readme = TheDreamPage
}

export class WhyDateTime extends InternalMarkdownWrapper {
  readme = WhyDateTimePage
}

export class About extends InternalMarkdownWrapper {
  readme = AboutPage
}

export class Home extends InternalMarkdownWrapper {
  readme = HomePage
}


    