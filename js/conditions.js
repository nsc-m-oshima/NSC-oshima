let num = 10;

if(num > 0) {
    console.log('０より大きい');
} else {
    console.log('０より小さい');
}

if(num % 2) {
    console.log('奇数');
} else if (num % 3) {
    console.log('偶数で、３で割り切れない数字');
} else {
    console.log('偶数で、３で割り切る数字');
}