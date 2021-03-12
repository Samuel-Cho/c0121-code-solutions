let dataModel = require('./data.json');
const create = require('./create');
const read = require('./read');
const remove = require('./delete');
const update = require('./update');

if (process.argv[2] === 'read') {
  read(dataModel);
} else if (process.argv[2] === 'create') {
  create(dataModel, process.argv[3]);
} else if (process.argv[2] === 'delete') {
  remove(dataModel, process.argv[3]);
} else if (process.argv[2] === 'update') {
  update(dataModel, process.argv[3], process.argv[4]);
} else {
  console.log('invalid command');
}
