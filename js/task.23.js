var arr = [1, 2, 3, 4];
var newArr = [];

for(i = 0; i < arr.length; i++) {
    var sqr = arr[i] * arr[i];
    newArr.push(sqr);
}
console.log(newArr);

for (j = 0, sum = 0; j < newArr.length; j++) {
    sum+=newArr[j];
}

console.log(sum);


