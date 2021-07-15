async function function1(callback){
    let promiseOBJ = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('function1 finished')
        res();
    }, 3000)
        
    })

    await promiseOBJ;
    callback();
}

function callIt(){
    console.log('callback function');
}

function1(callIt);

