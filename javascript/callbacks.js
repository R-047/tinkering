function sum (a, b, callback){
     var sum = a+ b;
     callback(sum);
    
}

function display(sum){
    console.log('sum: '+sum);
}

function display2(sum) {
    console.log('sum way 2: '+sum);
}


sum(10, 100, display2);
