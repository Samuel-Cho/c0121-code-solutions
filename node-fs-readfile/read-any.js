const fs = require('fs');

fs.readFile('/home/dev/repos/c0121-code-solutions/node-fs-readfile/' + process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
