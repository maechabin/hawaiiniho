import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  htmlAttributes: any;
  headComponents: any;
  bodyAttributes: any;
  preBodyComponents: any;
  body: string;
  postBodyComponents: any;
}

export default function HTML(props: Props): JSX.Element {
  const head = Helmet.rewind();
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {props.headComponents}
        {head.title.toComponent()}
        <script src="/js/jquery.js" defer />
        <script src="/js/cb-fsss.min.js" defer />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
