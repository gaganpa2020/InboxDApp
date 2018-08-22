const path  = require('path');
const fs  = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

let compiledContract = solc.compile(source, 1).contracts[':Inbox'];
console.log(compiledContract);

module.exports =  compiledContract;
