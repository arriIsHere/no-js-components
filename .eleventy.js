/**
 * Copyright 2019 Benjamin Blais
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 */

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
module.exports = (eleventyConfig) => {

	eleventyConfig.addPlugin(syntaxHighlight);

	return {
		dir: {
			input: 'src',
			output: '_site'
		},
		templateFormats: [
			"md",
			"html",
			"css",
			"jpg",
			"png",
			"gif",
			"ico",
			"svg",
			"njk",
			"ttf",
			"otf",
			"woff",
			"woff2",
		],
		passthroughFileCopy: true
	}
}