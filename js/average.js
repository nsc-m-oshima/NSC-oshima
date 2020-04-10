function average(array) {
    // arrayの中身を全部たす
    let sum = 0;

    for(let counter = 0; counter < array.length; counter ++) {
        sum = sum + array[counter];
    }
    // 足した合計を割る
    return sum / array.length;
}

let values = [1,2,3];
console.log(average(values));