function function1 (){
    return promiseObj = new Promise((res, rej) => {
        res('hello function 1');
    })

}

function function2 (){
    return promiseObj = new Promise((resolveCB, rejectCB) => {
        setTimeout(() => {
            data = 10;
            rejectCB(data);
        }, 3000)
    })

}

function function3(){
    console.log('function 3')
}

function1().then((data) => {
    console.log(data);
    function2().then((data) => {
        console.log(data);
        function3();
    }).catch((data) => {
         console.log('error '+data)
         function3();
    });
})