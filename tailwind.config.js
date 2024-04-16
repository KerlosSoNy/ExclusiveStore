const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    flowbite.content(),
  ],
  plugins: [
    // Add any other plugins you have here
    flowbite.plugin(),
    
  ],
};