# hexo-helper-htmlentities

[![node](https://img.shields.io/node/v/hexo-helper-htmlentities.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-htmlentities)
[![npm version](https://img.shields.io/npm/v/hexo-helper-htmlentities.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-htmlentities)
[![npm downloads](https://img.shields.io/npm/dt/hexo-helper-htmlentities.svg?style=flat-square)](https://www.npmjs.com/package/hexo-helper-htmlentities)
[![GitHub release](https://img.shields.io/github/release/kulikala/hexo-helper-htmlentities.svg?style=flat-square)](https://github.com/kulikala/hexo-helper-htmlentities/releases/latest)
[![MIT License](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](LICENSE)

[Hexo] helper plugin for encoding html entities.
This plugin uses `AllHtmlEntities` class of [node-html-entities].

## Installation

``` bash
$ npm install hexo-helper-htmlentities --save
```

## Usage

Add `htmlentities` tag in your EJS template:

```ejs
<%- htmlentities('<>"&©®∆') %>
```

The helper will generate encoded html entities like this:

```html
&lt;&gt;&quot;&amp;&copy;&circledR;∆
```

Make sure to use `<%- htmlentities() %>` and not `<%= htmlentities() %>` to prevent EJS from escaping the generated string.

[Hexo]: http://hexo.io/
[node-html-entities]: https://github.com/mdevils/node-html-entities
