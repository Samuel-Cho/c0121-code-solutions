const fs = require('fs');

fs.readFile('/home/dev/repos/c0121-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
