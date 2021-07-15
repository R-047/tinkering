const sample_data =
    [
        {
            name: 'a',
            age: 1
        },
        {
            name: 'b',
            age: 2
        },
        {
            name: 'c',
            age: 3
        }
    ]

//using for loop
for (var i = 0; i < sample_data.length; i++) {
    console.log("name: " + sample_data[i].name + "\nage: " + sample_data[i].age);
    console.log('\n');
}

//using for each function
console.log('printing using foreach: ')
sample_data.forEach((element, index, array) => {
    console.log('index of element: ' + index + '\nname: ' + element.name + '\nage: ' + element.age);
    console.log(array);
    console.log('\n');
})

//using filter
console.log('usage of filter function: ')

functionUsingFilter('b')

function functionUsingFilter(filterName) {
    const filterOP = sample_data.filter(element => element.name !== filterName ? true:console.log(element.name+' not included'));
    console.log('filtered output: ');
    console.log(filterOP);

}

//using map
console.log('usage of map function')

const modifiedArr = sample_data.map((element, index) => {
    var id = index;
    var obj = {
        id: id,
        name: element.name,
        age: element.age
    };
    return obj
})

console.log('map function used: ');
console.log(modifiedArr);

//using reducer: gives a single output from the given array based on the fucntion
console.log('using reducer');
const value = sample_data.reduce((element1, element2) => {
    if(element1.age < element2.age){
        return element1;
    }else{
        return element2;
    }
})

console.log('logging the largest age: ')
console.log(value);
