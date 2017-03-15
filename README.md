# hexo-helper-htmlentities

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
