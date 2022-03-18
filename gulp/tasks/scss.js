import dartSass from 'sass'; // Sass compiler
import gulpSass from 'gulp-sass'; // Sass gulp plugin
import rename from 'gulp-rename'; // To make style[.min.css] files
import cleanCss from 'gulp-clean-css'; // Minimize css
import webpcss from 'gulp-webpcss'; // Logging WEBP images
import autoprefixer from 'gulp-autoprefixer'; // Prefixer for browsers
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Groupping media queries


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBroweserslist: ['last 3 versions'],
            cascade: true
        }))
        // Uncomment if you need non-expanded copy style file
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}