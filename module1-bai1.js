let arr1 = [2,5,5,4,10,10,9];
function checkScore (arr){
let temp = "";
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
            if (arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[2];
}
console.log(checkScore(arr1))
