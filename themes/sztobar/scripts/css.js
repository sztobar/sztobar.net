'use strict';

hexo.extend.renderer.register('css', 'css', (data, opts) => {
  const path          = require('path');
  const postcss       = require('postcss');

  const postcssNested = require('postcss-nested');
  const cssNext       = require('cssnext');
  const postcssImport = require('postcss-import');

  const plugins = [postcssImport, postcssNested, cssNext()];

  if (isExternal(data.path)) {
    return data.text;
  }

  if (isPartial(data.path)) {
    return '';
  }

  return postcss(plugins)
    .process(data.text, {
      from: data.path
    })
    .then((result) => {
      return result.css;
    });

  function isExternal(filePath) {
    return path.dirname(filePath).indexOf('css') === -1;
  }

  function isPartial(filePath) {
    return path.basename(filePath) !== 'main.css';
  }
});
