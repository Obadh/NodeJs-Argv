var fs = require('fs');
var filename = __dirname + '/../todo.txt';

function deleteItem(number) {

  fs.readFile(filename, 'utf-8', function (error, data) {

    if (error == null) {

      var lines = data.split(/\n/);

      lines.splice(number-1, 1);
      //lines.slice(0,lines.length-1);
      //console.log(lines);

      data = lines.join('\n');
      fs.writeFile(filename, data);

    } else if (error.code == 'ENOENT') {
      console.error('No to-do items yet');
    } else {
      console.error('Error reading to do list');
    }

  });

}

module.exports = deleteItem;
