/*
1. Get Method:
    1.1 indexOf()
    const array = [1, 2, 3, 4, 5];
    let a = array.indexOf(array);
    console.log(a);

    1.2 find()
    find method get the first element that satisfies a condition
    const array = [1, 2, 3, 4, 5];
    let c = array.find((num) => num % 2 ===0)
    console.log(c); 2

    1.3 filter()
    filter method get an array of elements that satisfies a condition.
    const array = [1, 2, 3, 4, 5];
    let f = array.filter((num) => num % 2 ===0)
    console.log(f) [2,4]

    1.4 slice()
    Slice() method get a subset of the array from start index to end index( end not included)
    const array = [1, 2, 3, 4, 5];
    let f = array.slice(1,4)
    console.log(f)

2. Add Methods:
    2.1 push()
    push() will modify the original array itself
    const array = [1, 2];
    array.push(3,4)
    console.log(array) 
       
    2.2 contact()
    concat method will create the new array and not mofify the original array.
    const array2 = [5,6];
    const array3 = array2.concat(7,8)
    console.log(array3) //[ 5, 6, 7, 8 ]
    console.log(array2) //[ 5, 6 ]

3. Remove Methods:
    3.1 pop()
    remove the last element of the array
    let arr1 = [1,2,3,4];
    let popped = arr1.pop()
    console.log(popped); //4
    console.log(arr1)// [1,2,3]

    3.1 shift()
    remove the first element of the array
    let arr2 = [1,2,3,4];
    let sifted = arr2.shift()
    console.log(sifted); // 1
    console.log(arr2) // [ 2, 3, 4 ]

    3.1 splice()
    The splice method is used to add , remove, or replace elements in an array.
    array.splice(startIndex, deleteCount , ...itemtoAdd(multiple paramater to add));
    let letters = ["a","b","c"];
    
    // Add 'x' and 'y' at index 1
    letters.splice(1,0,'x', 'y')
    console.log(letters) //[ 'a', 'x', 'y', 'b', 'c' ]
    
    // Remove an element starting from index 1
    let letters = ["a","b","c"];
    letters.splice(1,1,'x', 'y')
    console.log(letters)
    
    //Replaces the elements at index 2 with 'q'
    let letters = ['a' ,'b' , 'c'];
    letters.splice(2,1,'q')
    console.log(letters)
4. Modify  Methods:
    4.1 map()
    let array1 = [1,2,3]
    let mappedArray = array1.map(item => item * 2)
    // map return new array
    console.log(mappedArray)
    console.log(array1) 

    4.1 forEach()
    
5. Others Methods:
    5.1 join()       
    5.2 length()       
    5.3 sort()       
    5.4 reverse()       
    5.5 reduce()       
    5.6 some()       
    5.7 every()       
*/
