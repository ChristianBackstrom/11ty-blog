const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
      outputDir: './_site/img/',
      widths: [400, null],
      formats: ['webp', 'avif', 'jpeg']
  });

  let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async'
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: 'inline'
  });
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    return {
        dir: {
            input: 'src'
        }
    };
};
