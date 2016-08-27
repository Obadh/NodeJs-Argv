var fs = require('fs');
var filename = __dirname + '/../todo.txt';

function showList() {
  var lines, line, done;

  fs.readFile(filename, 'utf-8', function (error, data) {

    if (error == null) {

      data = data.slice(0, data.length - 1);
      if(data.charAt(0)==0 & data.length==0){
        fs.unlink(__dirname + '/../todo.txt',function(err){
          if(err) return console.log(err);
          //console.log('file deleted successfully');
          });
        }
        //console.log(data.length);
      lines = data.split(/\n/);


      console.log('To-do items:\n');

      for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        done = line.charAt(0) != ' ';

        console.log('  ' + (i + 1) + ': ' + line + ' (done: ' + done + ')');
      }

    } else if (error.code == 'ENOENT') {
      console.log('The to do list is empty');
    } else {
      console.error('Error reading to do list');
    }

  });
}

module.exports = showList;
