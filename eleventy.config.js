import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
  // Include favicon in the build process
  eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  return {
    // Use Nunjucks in HTML files
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      data: "data",
      includes: "includes",
      output: "_site",
    },
  };
}
