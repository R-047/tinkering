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
