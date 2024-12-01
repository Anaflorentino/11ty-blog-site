const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats(["md", "html"]);
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets')

    eleventyConfig.addFilter("postDate", (dateObject) => {
        return DateTime.fromJSDate(dateObject).toLocaleString(DateTime.DATE_MED);
    })

    return {
        dir: {
            input: "src",
            output: "public"
          }
    }
}