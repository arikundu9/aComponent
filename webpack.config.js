const path = require("path");

module.exports = {
    //This property defines where the application starts
    entry: "./dist/index.js",

    //This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "aComponent.js",
    },
};
