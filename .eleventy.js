module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  eleventyConfig.addFilter("formatDate", function(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00Z');
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  });

  eleventyConfig.addFilter("sortByDate", function(events) {
    if (!Array.isArray(events)) return [];
    return events.sort((a, b) => {
      const dateA = new Date(a.date + 'T00:00:00Z');
      const dateB = new Date(b.date + 'T00:00:00Z');
      return dateA - dateB;
    });
  });

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      data: "_data"
    }
  };
};