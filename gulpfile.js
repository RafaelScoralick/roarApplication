var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-filesize');
//var gulpDocumentation = require('gulp-documentation');
var strip = require('gulp-strip-comments');
var ngAnnotate = require('gulp-ng-annotate');
var bytediff = require('gulp-bytediff');

/****************************************
Lista de task secundarias
usar apenas quando adicionar novos
arquivos
*****************************************/
gulp.task('image', function() {
    return gulp.src('build/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/image/'))
});
gulp.task('npmScripts', function() {
    var npmScripts = [
        'node_modules/jquery/dist/jquery.min.js',
        //ajuda a corrigir todos os avisos de passive envent listener
        //mas quebra outros eventos
        //'node_modules/default-passive-events/default-passive-events.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-disqus/angular-disqus.min.js',
        'node_modules/angular-touch/angular-touch.min.js',
        //'node_modules/lodash/lodash.min.js',
        //'node_modules/sidebarjs/dist/sidebarjs.min.js',
        'node_modules/angular-sidebarjs/dist/angular-sidebarjs.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        //'node_modules/restangular/dist/restangular.min.js',
        'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
        'node_modules/angular-i18n/angular-locale_pt-br.js'
    ];
    return gulp.src(npmScripts)
        //.pipe(size())
        .pipe(sourcemaps.init())
        .pipe(concat('req.min.js', {newLine: ';'}))
        .pipe(bytediff.start())
        //.pipe(uglify({mangle: true}))
        .pipe(strip())
        .pipe(bytediff.stop())
        .pipe(sourcemaps.write('.'))   
        .pipe(gulp.dest('build/js/'));
});

/****************************************
Lista de task principais
*****************************************/
var arquivos = {
    scripts: [
        'src/app/root.js',
        'src/app/*.js',
        'src/app/scenario/**/*.js',
        'src/app/main/**/*.js'
    ],
    templates: 'src/**/*.html',
    sass: [
        'node_modules/bootstrap/dist/css/bootstrap-grid.css',
        'node_modules/sidebarjs/dist/sidebarjs.css',//criar versão propria
        'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',//criar versão propria
        'src/style/*.scss',
        'src/app/**/*.scss'
    ]
        
};
gulp.task('templates', function() {
    var angularTemplateCache = require('gulp-angular-templatecache');
    var addStream = require('add-stream');
    var htmlmin = require('gulp-htmlmin');
    
    return gulp.src(arquivos.templates)
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments:true
    }))
    .pipe(angularTemplateCache('templateCache.js',{ 
        module:'templateCache', 
        standalone: true,
        transformUrl: function(url) {
    	    return url.split("/").pop();
        }})
    
    ).pipe(gulp.dest('build/js/'));
});
gulp.task('scripts', function() {
    var eslint = require('gulp-eslint');
    return gulp.src(arquivos.scripts)
        .pipe(sourcemaps.init())
        //.pipe(size())
        
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        
        .pipe(babel({ 
            presets: ['es2015'], 
            plugins: [["angularjs-annotate", { "explicitOnly" : true}]]
        }))
        .pipe(concat('roar.js', {newLine: ';'}))
        .pipe(bytediff.start())
        //.pipe(uglify({mangle: true}))
        .pipe(bytediff.stop())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js/'))        
        .on('error', function(err){
            console.error("erro: "+err.toString);
        });
});
gulp.task('fAwesome',function() {
    gulp.src(['node_modules/font-awesome/css/font-awesome.css'])
    .pipe(concat('req.min.css'))
    .pipe(gulp.dest('build/css/'));
})
gulp.task('sass',['fAwesome'], function() {
    //var uncss = require('gulp-uncss');
    var sass = require('gulp-sass');
    gulp.src(arquivos.sass)
    .pipe(sourcemaps.init())
    //.pipe(size())//exibir tamanho de cada arquivo
    .pipe(sass({
        //includePaths: ['./mixins/','./utilities/']
        outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(concat('style.css'))//juntar tudo em um unico arquivo

    //.pipe(uncss({//remover css não usado
     //       html: ['src/app/**/*.html']
    //}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(''));
});

/****************************************

Atalho das Tasks

gulp        compila os components, scripts e o sass

*****************************************/

gulp.task('default',['npmScripts','scripts','templates','sass'], function() {
    gulp.watch(arquivos.templates, ['templates']);
    gulp.watch(arquivos.sass, ['sass']);
    gulp.watch(arquivos.scripts, ['scripts']);
});
