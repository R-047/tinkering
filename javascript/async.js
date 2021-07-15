function function1(){
    console.log('hello');
}

function function2(){
    promiseOBJ = new Promise((res, rej) =>{
        setInterval(()=>{
            res(10);
        }, 3000)
    });
    return promiseOBJ;
}

function function3(){
    console.log('function 3')
}


async function main(){
function1();
const secVar = await function2();
console.log(secVar);
function3();
}

main();
