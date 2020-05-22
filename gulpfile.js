var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Move the css files into the /src/css folder
gulp.task('css', function() {
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/css/all.css',
    
])
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the webfonts files into the /src/webfonts folder
gulp.task('webfonts', function() {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'
])
        .pipe(gulp.dest("src/webfonts"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('js', 'css', 'webfonts','serve'));