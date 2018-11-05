import React, { Component } from 'react';
import HeaderComponet from './header';
export default class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    if(EASY_ENV_IS_NODE) {
      return <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
          <meta name="keywords" content={this.props.keywords}></meta>
          <meta name="description" content={this.props.description}></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
        <body>
          <div id="app">{this.props.children}</div></body>
      </html>;
    }
    return <div id="app">{this.props.children}</div>;
  }
}