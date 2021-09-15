//Only for development purposes.

const { src, dest, parallel } = require("gulp");
const server = require("gulp-webserver");
var sass = require("gulp-sass")(require("sass"));
const inject = require("gulp-inject");
var concat = require("gulp-concat");

function injectTask() {
  var index = src("./index.html");
  var assetsSrc = src(["./src/**/*.js", "./src/**/*.css"], { read: false });
  return index.pipe(inject(assetsSrc)).pipe(dest("./"));
}

function buildStyles() {
  return src("./src/**/*.scss")
    .pipe(concat("app.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./src/styles"));
}

function launchServer() {
  src("./").pipe(
    server({
      livereload: true,
      open: true,
      port: 34567,
    })
  );
}

exports.styles = buildStyles;
exports.inject = injectTask;
exports.server = launchServer;
