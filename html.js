'use strict'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import serialize from 'serialize-javascript'

// @twreporter
import webfonts from '@twreporter/react-components/lib/text/utils/webfonts'
import {
  colorGrayscale,
  colorBrand,
} from '@twreporter/core/lib/constants/color'

// lodash
import map from 'lodash/map'
const _ = {
  map,
}

export default class Html extends PureComponent {
  static propTypes = {
    scripts: PropTypes.array.isRequired,
    scriptElement: PropTypes.arrayOf(PropTypes.element).isRequired,
    styles: PropTypes.array.isRequired,
    contentMarkup: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    styleElement: PropTypes.arrayOf(PropTypes.element).isRequired,
    helmet: PropTypes.object.isRequired,
  }
  render() {
    const {
      contentMarkup,
      scripts,
      scriptElement,
      store,
      styleElement,
      styles,
      helmet,
    } = this.props

    return (
      <html lang="zh-TW">
        <head>
          <script
            async
            src="https://www.googleoptimize.com/optimize.js?id=OPT-NGNDMW8"
          />
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.priority.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.script.toComponent()}

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta httpEquiv="content-type" content="text/html; charSet=utf-8" />
          <meta httpEquiv="Cache-control" content="public" />
          <meta
            name="viewport"
            content="viewport-fit=cover, width=device-width, user-scalable=no, minimum-scale=1, initial-scale=1"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content={colorGrayscale.gray100} />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="https://www.twreporter.org/a/rss2.xml"
          />
          <link rel="manifest" href="/meta/manifest.json" />
          {/* Add to home screen for Safari on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta
            name="apple-mobile-web-app-title"
            content="報導者 The Reporter"
          />
          <link
            rel="apple-touch-icon"
            href="https://www.twreporter.org/images/apple-touch-icon-152x152.png"
          />
          {/* Title icon for windows */}
          <meta
            name="msapplication-TileImage"
            content="https://www.twreporter.org/images/icon-normal.png"
          />
          <meta name="msapplication-TileColor" content={colorBrand.main} />

          <link href="/asset/favicon.png" rel="shortcut icon" />
          <link rel="stylesheet" href="/asset/normalize.css" />
          {_.map(webfonts.fontGCSFiles, (fileSrc, key) => (
            <link
              rel="preload"
              href={fileSrc}
              key={'webfont' + key}
              as="font"
              crossOrigin="anonymous"
            />
          ))}
          {_.map(styles, (stylesheet, key) => (
            <link
              href={stylesheet}
              key={'stylesheet' + key}
              media="all"
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
            />
          ))}
          {styleElement}
        </head>
        <body>
          A. Commit message:
          Remove `dangerouslySetInnerHTML` to prevent XSS vulnerabilities
          
          B. Change summary:
          Replaced the `dangerouslySetInnerHTML` use with standard React text content rendering to ensure data is automatically escaped, preventing potential XSS attacks.
          A. Commit message:
          Remove dangerouslySetInnerHTML to prevent XSS vulnerability in inline script.
          
          B. Change summary:
          Replaced the "dangerouslySetInnerHTML" with a regular script element and JSON.stringified the state to safely embed it without the risk of XSS.
          
          C. Compatibility Risk:
          Low
          
          D. Fixed Code:
          A. Commit message:
          Safely embed Typekit loading script in a React component.
          
          B. Change summary:
          Replaced the `dangerouslySetInnerHTML` usage with a safe method to load and execute the Typekit script, by actively managing script insertion using native DOM manipulation techniques separate from React's JSX rendering cycle.
          
          C. Compatibility Risk:
          Medium
          
          D. Fixed Code:
          ```jsx
          import React, { useEffect } from 'react';
          
          const SafeScriptLoader = () => {
            useEffect(() => {
              const d = document;
              const config = {
                kitId: 'vlk1qbe',
                scriptTimeout: 3000,
                async: true
              };
              const h = d.documentElement;
              const t = setTimeout(() => {
                h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
              }, config.scriptTimeout);
              const tk = d.createElement("script");
              let f = false;
              const s = d.getElementsByTagName("script")[0];
              h.className += " wf-loading";
              tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
              tk.async = true;
              tk.onload = tk.onreadystatechange = function () {
                const a = this.readyState;
                if (f || a && a !== "complete" && a !== "loaded") return;
                f = true;
                clearTimeout(t);
                try { Typekit.load(config); } catch (e) {}
              };
              s.parentNode.insertBefore(tk, s);
            }, []);
          
            return null;
          };
          
          export default SafeScriptLoader;
          ```          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__REDUX_STATE__=${serialize(store.getState())};`,
            }}
            charSet="UTF-8"
          />
          {_.map(scripts, (script, key) => (
            <script src={script} key={'scripts' + key} charSet="UTF-8" />
          ))}
          {scriptElement}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(d) {
                var config = {
                  kitId: 'vlk1qbe',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `,
            }}
          />
        </body>
      </html>
    )
  }
}
