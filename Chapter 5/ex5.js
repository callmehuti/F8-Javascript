var arrNumber = ['111', '222', '333', '444'];

// Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
if (arrNumber.includes('222')) {
  arrNumber.splice(arrNumber.indexOf('222'), 1);
}

// Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
const index = arrNumber.indexOf('444');
if (arrNumber.includes('444')) {
  arrNumber[index] = '555';
}

// Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình
// arrNumber = arrNumber.map(Number);

// or using for loop
for (let eachEle = 0; eachEle < arrNumber.length; eachEle++) {
    arrNumber[eachEle] = Number(arrNumber[eachEle]);
}

console.log(arrNumber);
