#!/usr/bin/env node

var fs = require('fs');
function getFileList(dir) {
    var files = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()){
            files.push(file);
            files = files.concat(getFileList(file));
        } else {
            files.push(file);
        }
    })
    return files
}
var fileList = getFileList("/tmp") ;
var str;
fileList.forEach(function(file) { 
  console.log( file ) ;
});
