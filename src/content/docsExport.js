// Import primary markdown tools
import {InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';

// internal markedown docs
import AboutPage from './static/general/about.md';
import HomePage from './static/home.md';

// Blog references
import CustomElementsPage from './static/blog/custom-elements.md'
import DetectingTouchPage from './static/blog/detecting-touch.md'
import TheDreamPage from './static/blog/the-dream.md'

export class About extends InternalMarkdownWrapper {
  readme = AboutPage
}

export class AuroHome extends InternalMarkdownWrapper {
  readme = HomePage
}


// Blog

export class TheDream extends InternalMarkdownWrapper {
  readme = TheDreamPage
}

export class DetectingTouch extends InternalMarkdownWrapper {
  readme = DetectingTouchPage
}

export class CustomElements extends InternalMarkdownWrapper {
  readme = CustomElementsPage
}
