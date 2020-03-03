// function defaultTask(cb) {
//     // place code for your default task here
//     console.log(cb);
//     cb(0);
//   }
  
//   exports.default = defaultTask







// const { series } = require('gulp');

// var index = 0;
// var cleanIndex = 0;
// var buildIndex = 0;
// // `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// // 它仍然可以被用在 `series()` 组合中。
// function clean(cb) {
//     console.log("clean", "index=", index++, "cleanIndex=", cleanIndex++);
//   // body omitted
//   cb();
// }

// // `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// // 它也仍然可以被用在 `series()` 组合中。
// function build(cb) {
//     console.log("build", "index=", index++, "buildIndex=", buildIndex++);
//   // body omitted
//   cb();
// }

// exports.build = build;
// exports.default = series(clean, build);






// 组合任务
// Gulp 提供了两个强大的组合方法： series() 和 parallel()，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。series() 和 parallel() 可以互相嵌套至任意深度。

// 如果需要让任务（task）按顺序执行，请使用 series() 方法。

// const { series } = require('gulp');

// function transpile(cb) {
//   // body omitted
//   cb();
// }

// function bundle(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(transpile, bundle);








// // 对于希望以最大并发来运行的任务（tasks），可以使用 parallel() 方法将它们组合起来。

// const { parallel } = require('gulp');

// function javascript(cb) {
//   // body omitted
//   cb();
// }

// function css(cb) {
//   // body omitted
//   cb();
// }

// exports.build = parallel(javascript, css);








// // 当 series() 或 parallel() 被调用时，任务（tasks）被立即组合在一起。这就允许在组合中进行改变，而不需要在单个任务（task）中进行条件判断。


// const { series } = require('gulp');

// function minify(cb) {
//   // body omitted
//   cb();
// }


// function transpile(cb) {
//   // body omitted
//   cb();
// }

// function livereload(cb) {
//   // body omitted
//   cb();
// }

// console.log(process.env);
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   exports.build = series(transpile, minify);
// } else {
//   exports.build = series(transpile, livereload);
// }







// series() 和 parallel() 可以被嵌套到任意深度。


// const { series, parallel } = require('gulp');

// function clean(cb) {
//   // body omitted
//   cb();
// }

// function cssTranspile(cb) {
//   // body omitted
//   cb();
// }

// function cssMinify(cb) {
//   // body omitted
//   cb();
// }

// function jsTranspile(cb) {
//   // body omitted
//   cb();
// }

// function jsBundle(cb) {
//   // body omitted
//   cb();
// }

// function jsMinify(cb) {
//   // body omitted
//   cb();
// }

// function publish(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(
//   clean,
//   parallel(
//     cssTranspile,
//     series(jsTranspile, jsBundle)
//   ),
//   parallel(cssMinify, jsMinify),
//   publish
// );



// 当一个组合操作执行时，这个组合中的每一个任务每次被调用时都会被执行。例如，在两个不同的任务（task）之间调用的 clean 任务（task）将被执行两次，并且将导致不可预期的结果。因此，最好重构组合中的 clean 任务（task）。

// This is INCORRECT
// const { series, parallel } = require('gulp');

// const clean = function(cb) {
//   // body omitted
//   cb();
// };

// const css = series(clean, function(cb) {
//   // body omitted
//   cb();
// });

// const javascript = series(clean, function(cb) {
//   // body omitted
//   cb();
// });

// exports.build = parallel(css, javascript);



// 重构为：

// const { series, parallel } = require('gulp');

// function clean(cb) {
//   // body omitted
//   cb();
// }

// function css(cb) {
//   // body omitted
//   cb();
// }

// function javascript(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(clean, parallel(css, javascript));





// 异步执行
// Node 库以多种方式处理异步功能。最常见的模式是 error-first callbacks，但是你还可能会遇到 streams、promises、event emitters、child processes, 或 observables。gulp 任务（task）规范化了所有这些类型的异步功能。

// 任务（task）完成通知
// 当从任务（task）中返回 stream、promise、event emitter、child process 或 observable 时，成功或错误值将通知 gulp 是否继续执行或结束。如果任务（task）出错，gulp 将立即结束执行并显示该错误。

// 当使用 series() 组合多个任务（task）时，任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。当使用 parallel() 组合多个任务（task）时，一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。



// 返回 stream


// const { src, dest } = require('gulp');

// function streamTask() {
//   return src('*.js')
//     .pipe(dest('output'));
// }

// exports.default = streamTask;


// 返回 promise

// function promiseTask() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("abc");
//             resolve("abcdefg");
//         }, 1030);
//     });
//   }
  
//   exports.default = promiseTask;



// 返回 event emitter

// const { EventEmitter } = require('events');

// function eventEmitterTask() {
//   const emitter = new EventEmitter();
//   // Emit has to happen async otherwise gulp isn't listening yet
//   setTimeout(() => emitter.emit('finish'), 1250);
//   return emitter;
// }

// exports.default = eventEmitterTask;


// 返回 child process
// const { exec } = require('child_process');

// function childProcessTask() {
//   return exec('date');
// }

// exports.default = childProcessTask;


// 返回 observable

// const { Observable } = require('rxjs');

// function observableTask() {
//   return Observable.of(1, 2, 3);
// }

// exports.default = observableTask;


// 使用 callback
// function callbackTask(cb) {
//     // `cb()` should be called by some async work
//     cb();
//   }
  
//   exports.default = callbackTask;

//   如需通过 callback 把任务（task）中的错误告知 gulp，请将 Error 作为 callback 的唯一参数。
// function callbackError(cb) {
//     // `cb()` should be called by some async work
//     cb(new Error('kaboom'));
//   }
  
//   exports.default = callbackError;

// 然而，你通常会将此 callback 函数传递给另一个 API ，而不是自己调用它。
// const fs = require('fs');

// function passingCallback(cb) {
//   fs.access('gulpfile.js', cb);
// }

// exports.default = passingCallback;

// 使用 async/await

// const fs = require('fs');

// async function asyncAwaitTask() {
//   const { version } = fs.readFileSync('package.json');
//   console.log(version);
//   await Promise.resolve('some result');
// }

// exports.default = asyncAwaitTask;

// const { src, dest } = require('gulp');

// exports.default = function() {
//   return src('**/*.js')
//     .pipe(dest('output/'));
// }



// 流（stream）所提供的主要的 API 是 .pipe() 方法，用于连接转换流（Transform streams）或可写流（Writable streams）。
// const { src, dest } = require('gulp');
// // const babel = require('gulp-babel');

// exports.default = function() {
//   return src('src/*.js')
//     // .pipe(babel())
//     .pipe(dest('output/'));
// }


// const { src, dest } = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');

// exports.default = function() {
//   return src('src/*.js')
//     .pipe(babel())
//     .pipe(src('vendor/*.js'))
//     .pipe(uglify())
//     .pipe(dest('output/'));
// }


// const { src, dest } = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');

// exports.default = function() {
//   return src('src/*.js')
//     .pipe(babel())
//     .pipe(src('vendor/*.js'))
//     .pipe(dest('output/'))
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('output/'));
// }




// const { rollup } = require('rollup');

// // Rollup 提供了基于 promise 的 API，在 `async` 任务（task）中工作的很好
// exports.default = async function() {
//   const bundle = await rollup.rollup({
//     input: 'src/index.js'
//   });

//   return bundle.write({
//     file: 'output/bundle.js',
//     format: 'iife'
//   });
// }


const { watch, series } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

// 可以只关联一个任务
watch('src/*.css', css);
// 或者关联一个任务组合
watch('src/*.js', series(clean, javascript));