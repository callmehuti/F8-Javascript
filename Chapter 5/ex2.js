/**
 * Bài 2: Tạo menu như sau:

-- CHỌN CHỨC NĂNG --

    Nhập mảng 
    Xuất mảng 
    Tìm số lớn nhất 
    Tìm số nhỏ nhất 
    Tính tổng 
    Thoát 

    Khi chọn 1: Gọi hàm để nhập mảng
    Khi chọn 2: Gọi hàm để xuất mảng
    Khi chọn 3: Gọi hàm tìm số lớn nhất trong mảng
    Khi chọn 4: Gọi hàm tìm số nhỏ nhất trong mảng
    Khi chọn 5: Gọi hàm tính tổng các số trong mảng
    Khi chọn 6: Thoát khỏi chương trình

 */

// inputArr
// outputArr
// findMax
// findMin
// sumArr
// quit


let check = true;
let arr = [];
const menu = `-- CHỌN CHỨC NĂNG --

Nhập mảng // inputArr
Xuất mảng // outputArr
Tìm số lớn nhất // findMax
Tìm số nhỏ nhất // findMin
Tính tổng // sum
Thoát // quit

Khi chọn 1: Gọi hàm để nhập mảng
Khi chọn 2: Gọi hàm để xuất mảng
Khi chọn 3: Gọi hàm tìm số lớn nhất trong mảng
Khi chọn 4: Gọi hàm tìm số nhỏ nhất trong mảng
Khi chọn 5: Gọi hàm tính tổng các số trong mảng
Khi chọn 6: Thoát khỏi chương trình`;

do {
    let chooseOption = prompt(menu);
    if (chooseOption === '1') {
        arr = inputArr();
        check = false;
    } else if (check) {
        alert("Giá trị rỗng, vui lòng chọn 1 để nhập giá trị");
    } else if (chooseOption === '2') {
        outputArr(arr);
    } else if (chooseOption === '3') {
        console.log("Số lớn nhất tìm được là: " + findMax(arr));
    } else if (chooseOption === '4') {
        console.log("Số nhỏ nhất tìm được là: " + findMin(arr));
    } else if (chooseOption === '5') {
        console.log("Tổng tìm được là: " + sumArr(arr));
    }  else {
        console.log("Cya!");
        break;
    }

} while(true);

function inputArr() {
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

function findMax(arr) {
    let max = arr[0];
    // console.log(typeof max);
    for (let eachEle = 0; eachEle < arr.length; eachEle++) {
        if(max < arr[eachEle]) {
            // console.log(typeof arr[eachEle]);
            max = arr[eachEle];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let eachEle = 0; eachEle < arr.length; eachEle++) {
        if(min > arr[eachEle]) {
            min = arr[eachEle];
        }
    }
    return min;
}

function sumArr(arr) {
    let sum = 0;
    for (let eachEle = 0; eachEle < arr.length; eachEle++) {
        sum += Number(arr[eachEle]);
    }
    return sum;
}

