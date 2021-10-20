"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass");
const removeComments = require("gulp-strip-css-comments");
const uglify = require("gulp-uglify");
const panini = require("panini");
const del = require("del");
const newer = require("gulp-newer");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const webp = require('gulp-webp');
const group_media = require("gulp-group-css-media-queries");

var path = {
  build: {
    html: "dist/",
    css: "dist/assets/css/",
    js: "dist/assets/js/",
    images: "dist/assets/img/",
    fonts: "dist/assets/fonts/",
  },
  src: {
    html: "src/*.html",
    css: "src/assets/sass/style.scss",
    js: "src/assets/js/*.js",
    images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webp,json}",
    fonts: "src/assets/fonts/*.ttf",
  },
  watch: {
    html: "src/**/*.html",
    css: "src/assets/sass/**/*.scss",
    js: "src/assets/js/**/*.js",
    images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webp,json}",
    fonts: "src/assets/fonts/*.ttf",
  },
  clean: "./dist",
};

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
    },
    port: 3001,
    notify: false,
  });
}

function browserSyncReload(done) {
  browsersync.reload();
}

function html() {
  panini.refresh();
  return src(path.src.html, { base: "src/" })
    .pipe(plumber())
    .pipe(
      panini({
        root: "src/",
        layouts: "src/tpl/layouts/",
        partials: "src/tpl/partials/",
        helpers: "src/tpl/helpers/",
        data: "src/tpl/data/",
      })
    )
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css, { base: "src/assets/sass/" })
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer({
        BrowsersList: ["last 8 versions"],
        cascade: true,
      })
    )

    .pipe(cssbeautify())
    .pipe(group_media())
    .pipe(dest(path.build.css))
    .pipe(
      cssnano({
        zindex: false,
        discardComments: {
          removeAll: true,
        },
      })
    )

    .pipe(removeComments())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js, { base: "./src/assets/js/" })
    .pipe(newer(path.build.js))
    .pipe(plumber())
    .pipe(rigger())
    .pipe(dest(path.build.js))
    .pipe(
      uglify({
        compress: { unused: true, dead_code: true },
      })
    )
    .pipe(
      rename({
        suffix: ".min",
        extname: ".js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.images)
    .pipe(newer(path.build.images))
    .pipe(imagemin())
    .pipe(dest(path.build.images))
    .pipe(webp({
      quality: 70,
    }))
    .pipe(dest(path.build.images));
}

function fonts() {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(gulp.parallel(html, css, js, images));
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
