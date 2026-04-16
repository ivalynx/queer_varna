import { EleventyI18nPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import fs from "node:fs"; // Правильный импорт для файловой системы в ESM
import CleanCSS from "clean-css";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "bg", // Основной язык (в корне)
    errorMode: "allow-fallback",
  });
  
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "auto"],
    defaultAttributes: {
      width: null,
      height: null,
      loading: "lazy",
      decoding: "async"
    },    
    urlPath: "/img/",
    outputDir: "./_site/img/",
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        if (fs.existsSync('_site/404.html')) {
          const content_404 = fs.readFileSync('_site/404.html');
          bs.addMiddleware("*", (req, res) => {
            res.write(content_404);
            res.end();
          });
        }
      }
    }
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });


  eleventyConfig.addFilter("is_string", function(obj) {
    return typeof obj === 'string';
  });

  eleventyConfig.addBundle("css", {
transforms: [
    function(content) {
      if (this.type === "css") {
        const minified = new CleanCSS({}).minify(content);
        if (minified.errors.length > 0) {
          console.warn(`[CSS Bundle Error] в файле: ${this.page.inputPath}`, minified.errors);
          return content; 
        }        
        if (!minified.styles && content.length > 0) {
          console.warn(`[CSS Bundle Warning] Контент потерян после минификации в: ${this.page.inputPath}`);
          return content;
        }
        return minified.styles;
      }
      return content;
    }
  ]
  });

  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
      output: "_docs",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};