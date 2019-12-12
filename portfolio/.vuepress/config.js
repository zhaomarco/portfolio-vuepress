const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }],
    ['link', { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css"}],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato"}],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"}]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
