let arr1=[1,2,3,4,5,5];
let inp = +prompt();
function myRemoveFormArray(arr,num) {
    let arr2=[]
    for (let i = 0; i < arr.length; i++) {
        if (num != arr[i]) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
console.log(myRemoveFormArray(arr1,inp))