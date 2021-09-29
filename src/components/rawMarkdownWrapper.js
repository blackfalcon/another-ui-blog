import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExternalLink from '-!svg-react-loader!@alaskaairux/icons/dist/icons/interface/external-link-sm.svg';

export class RawMarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
    this.linkRenderer = this.linkRenderer.bind(this);
  };

  // function to get text from MD document
  componentWillMount() {
    fetch(this.getMarkdown()).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    });
  }

  // supporting function for headingRenderer function
  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  // function to set ID on heading element in MD document
  headingRenderer(props) {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(this.flatten, '')
    const slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
  }

  // function to re-write anchor element based on type of URL
  linkRenderer(props) {
    let pattern = /^((http|https|ftp):\/\/)/;

    if(pattern.test(props.href)) {

      // filter out links that are set to internal URLs
      if (props.href.includes("https://another-ui-blog.surge.sh/")) {

        let url = props.href
        url = url.replace(/^.*\/\/[^/]+/, '')
        return <a href={url}>{props.children}</a>
      }

      else {
        return <a href={props.href} className="externalLink" target="_blank" rel="noopener noreferrer">
          {props.children}
          <ExternalLink />
        </a>
      }
    }

    else if (!pattern.test(props.href)) {
      return <a href={props.href}>{props.children}</a>
    }
  }
}



export class ExternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    const details = this.githubURL.split("github.com/")[1].split("/");
    const repo = {
      user: details[0],
      name: details[1]
    };

    return `https://raw.githubusercontent.com/${repo.user}/${repo.name}/master/${this.readme}`
  }

  render() {

    return (
      <section>
        <article className="auro-markdown">
          <ReactMarkdown
            source={this.state.docsGenerator}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}
          />
        </article>
      </section>
    );
  }
}

export class InternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    return this.readme
  }

  render() {
    return (
      <section>
        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.docsGenerator}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}
          />
        </section>
      </section>
    );
  }
}
