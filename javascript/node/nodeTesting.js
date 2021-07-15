//console.log(process.argv);
//console.log(process.env);

const v1 = process.argv;
const v2 = process.env;

function func1(word){
    return word + ' processed';
}

module.exports = {v1, v2, func1};
