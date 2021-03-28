var gulp = require('gulp');
var gulpHbsRouter=require('gulp-hbs-router');
// var rename = require('gulp-rename');//重命名
var uglify=require('gulp-uglify');//js压缩
var watch=require('gulp-watch');//监视
var less=require('gulp-less');//编译less
var minifyCss = require("gulp-minify-css");//压缩CSS
var minifyHtml = require("gulp-minify-html");//压缩html
// var jshint = require("gulp-jshint");//js检查
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant'); //png图片压缩插件
var connect=require('gulp-connect');//引入gulp-connect模块 
// gulp.task('min', function () {
//     gulp.src('copyUrl/js/resize.js') // 要压缩的js文件
//     .pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
//     .pipe(rename('resize.min.js'))
//     .pipe(gulp.dest('dist/fot')); //压缩后的路径
// });
var webserver=require('gulp-webserver'); 


//使用路由器

// gulp.task('hbs',()=>{
//     gulp.src(['./layout/**/*.hbs']);
//         .pipe(gulpPlumber())
//         .pipe(gulpPlumber())
//         .pipe(gulpHbsRouter({
//             cwdPath:`${_dirname}/`,
//             routerPath:'hbsRouter.js',
//             partialPath:'partial.js',
//             minify:true
//         }))
//         .pipe(gulp.dest('./'))
// })






gulp.task('watchs',function(){
    gulp.watch('./src/*.html',gulp.series('html'));
    gulp.watch('./src/css/*.css',gulp.series('css'));
    gulp.watch('./src/js/*.js',gulp.series('js'));
})

gulp.task('connect',function(){
    connect.server({
        root:'src',//根目录
        ip:'127.0.0.1',//默认localhost:80
        livereload:true,//自动更新
        port:80//端口
    })
})

// gulp.task('webserver',function(){
//     gulp.src('./src')
//         .pipe(webserver({
//             host:'localhost',
//             port:80,
//             livereload:true,
//             open:'./index.html',//默认打开的页面
//             directoryListing:{
//                 enable:true,
//                 path:'./src'
//             },
//             proxies:[{
//                 source:'/api',
//                 target:'http://www.5.com'
//             }]
//         }))
// })

gulp.task('html',function(){
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/html'))
    .pipe(connect.reload());
})

gulp.task('css',function(){
    return gulp.src('./src/css/*.css')
    .pipe(minifyCss())//压缩css
    .pipe(gulp.dest('./dist/css')) //当前对应css文件
    .pipe(connect.reload());//更新
})
 
gulp.task('js',function(){
    return gulp.src('./src/js/jquery.min.js')
    // .pipe(jshint())//检查代码
    .pipe(uglify())//压缩js
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})
 //gulp.series|4.0 依赖
 //gulp.parallel|4.0 多个依赖嵌套
gulp.task('default',gulp.series(gulp.parallel('connect','watchs','html','css','js')));