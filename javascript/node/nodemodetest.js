console.log('directory name: '+__dirname,'\nfilename: '+ __filename);

const {v1, v2, func1} = require('./nodeTesting')
//console.log(impTesting);
console.log('v1 is '+v1);
console.log('v2 is '+v2);
console.log(func1('testword'));


const b = Buffer.from([0x41, 0x42, 0x43]);
console.log(b.toString('base64'));

let computer = Buffer.from("IBM3111", "ascii");
console.log(computer.toString());
for(let i = 0; i < computer.length; i++) {
computer[i]--;
}

console.log(computer.toString("ascii"));