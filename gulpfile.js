const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pumble = require("gulp-plumber");

function css(done) {
    src("src/scss/**/*.scss") //identificador del arhivo
        .pipe(pumble()) //compilador es la funcion 
        .pipe(sass()) //compilador es la funcion 
        .pipe(dest("build/css"))
    done();
}


function dev(done) {
    watch("src/scss/**/*.scss", css)
    done();
}

exports.css = css;
exports.dev = dev;