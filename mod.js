var fs = require("fs");
var path = require("path");

module.exports = function(dirName, extString, cb){

  var arr = [];

  fs.readdir(dirName, function callback(err, data){
    if(err){
      return cb(err);
    }

    for (var i = 0; i < data.length; i++){
      var x = data[i];
      var e = path.extname(x);

      if(e === "." + extString){
        arr.push(x);
      }
    }
    return cb(null, arr);
  })
}
