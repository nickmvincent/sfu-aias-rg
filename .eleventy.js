module.exports = function(eleventyConfig) {
  // Copy CSS directly to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Add date filter
  eleventyConfig.addFilter("formatDate", function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Debug: Log all data after it's loaded
  eleventyConfig.on('eleventy.after', ({ dir, results }) => {
    console.log('Data available to templates:', results[0].data);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};