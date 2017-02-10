const requiredir = require('requiredir');

global.gulp = require('gulp');
global.$ = require('gulp-load-plugins')({
    rename: {
        'gulp-image-optimization': 'gopt'
    }
});

console.log($)

global.CONFIG = require('./config');

requiredir('./tasks')
