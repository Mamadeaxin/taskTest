var arr = [1, 2, 3, 5 ,7];
var resultMin = 0;
var resultMax = 0;

function sortFunc (a, b) {
    return a - b;
}

arr.sort(sortFunc);

for (var i = 0; i < arr.length; i++){
    if(i !== 0) resultMax += arr[i];
    if(i !== arr.length - 1) resultMin += arr[i];
}

console.log(arr);
console.log(resultMax);
console.log(resultMin);

