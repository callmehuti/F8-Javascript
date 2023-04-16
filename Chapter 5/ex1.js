// Bài 1: Viết chương trình nhập 1 mảng, / sau đó xuất các phần tử của mảng vừa nhập ra màn hình
// Nhập từng số, xong đẩy giá trình thành 1 mảng

// Nâng cao, giải quyết sau
/**
 * Nếu người dùng nhập [1,2,3,4,5] 
 * Vẫn in dấu [] theo
 * 
 * Nếu ngừoi dùng nhập 1,2,3, 4,  5
 * Sẽ lấy thêm khoảng trắng khi xuất 4 và 2 khoảng trắng khi xuất 5
 * 
 * Nếu người dùng nhập 1 2 3 4 5
 * Nếu sài split(',') thì sẽ không có điểm chung là , để xử lý
 * 
 * Nếu người dùng nhập 1 2 3, 4, 5,6
 * Thì sẽ in ra 1 2 3 
 *               4
 *                5
 *              6
 */

// Nhập 1 mảng
// function inputArr() {
//     let arr = prompt("Nhap mot mang").split(",");
//     console.log(arr);
//     return arr;
// }

// Nhập từng số sau đó biến các số đã nhập thành 1 mảng
function inputArr() {
    let arr = [];
    let totalEleArr = prompt("Bạn muốn mảng của bạn có bao nhiêu giá trị");
    for (let eachEle = 0; eachEle < totalEleArr; eachEle++) {
        let valueArr = prompt(`Nhập phần tử ${eachEle+1}" `);
        arr.push(valueArr);
    }
    return arr;
}

function outputArr(arr) {
    console.log("Các phần tử trong mảng vừa nhập là")
    for(let eachEle = 0; eachEle < arr.length; eachEle++) {
        console.log(arr[eachEle] + "\n");
    }
}

// function outputArr(arr) {
//     console.log(arr.join("\n"));
// }

let arr = inputArr();
outputArr(arr);