/* global hexo */
'use strict';

var entities = new require('html-entities').AllHtmlEntities;

hexo.extend.helper.register('htmlentities', function (string) {
  return entities.encode(string);
});
