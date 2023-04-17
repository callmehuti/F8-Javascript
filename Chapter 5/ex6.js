/**
 * -- CHỌN CHỨC NĂNG --

    Nhập mảng
    Xuất mảng
    Đảo mảng
    Sắp xếp mảng
    Thoát

    Khi chọn 1: Gọi hàm nhập mảng
    Khi chọn 2: Gọi hàm xuất mảng
    Khi chọn 3: Gọi hàm đảo các phần tử của mảng
    Khi chọn 4: Gọi hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần
    Khi chọn 5: Thoát khỏi chương trình

 */
// Khai báo các biến cần thiết
let arr = [];
const menu = `

-- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Đảo mảng
4. Sắp xếp mảng
5. Thoát

Khi chọn 1: Gọi hàm nhập mảng
Khi chọn 2: Gọi hàm xuất mảng
Khi chọn 3: Gọi hàm đảo các phần tử của mảng
Khi chọn 4: Gọi hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần
Khi chọn 5: Thoát khỏi chương trình
`;

// Hàm các chức năng
do {
  let chooseOption = prompt(menu);
  if (chooseOption === "1") {
    arr = inputArr();
  } else if (chooseOption === "2") {
    outputArr(arr);
  } else if (chooseOption === "3") {
    reversedArr(arr);
  } else if (chooseOption === "4") {
    sortArr(arr);
  } else if (chooseOption === "5") {
    console.log("Cya!");
    break;
  } else {
    console.log("Chọn lại!");
    break;
  }
} while (true);

// Nhập mảng
function inputArr() {
  let totalEleArr = prompt("Bạn muốn mảng của bạn có bao nhiêu giá trị");
  for (let eachEle = 0; eachEle < totalEleArr; eachEle++) {
    let valueArr = prompt(`Nhập phần tử ${eachEle + 1}" `);
    arr.push(valueArr);
  }
  return arr;
}

// Xuất mảng
function outputArr(arr) {
  if (arr.length === 0) {
    console.log("Mảng rỗng, không có phần tử nào trong mảng.");
    return;
  }
  console.log("Các phần tử trong mảng vừa nhập là");
  for (let eachEle = 0; eachEle < arr.length; eachEle++) {
    console.log(arr[eachEle] + "\n");
  }
}

// // Đảo mảng với methods
// function reversedArrMethod(arr) {
//   if (arr.length === 0) {
//     console.log("Mảng rỗng, vui lòng nhập mảng để xem rõ kết quả hơn");
//     return;
//   }
//   console.log("Mảng trước khi đảo." + arr);
//   arr.reverse();
//   console.log("Mảng sau khi đảo." + arr);
// }

// Đảo mảng khi không dùng methods
function reversedArr(arr) {
  let emptyArr = [];
  console.log("Mảng trước khi đảo: " + arr);
  if (arr.length === 0) {
    console.log("Mảng rỗng, vui lòng nhập mảng để xem rõ kết quả hơn");
    return;
  }
  // pop phần tử cuối, và đẩy từng phần tử đó vào một mảng rỗng mới, sau đó gán mảng arr = mảng rỗng mới tạo.
  for (let eachEle = arr.length - 1; eachEle >= 0; eachEle--) {
    let temp = arr.pop();
    emptyArr.push(temp);
  }
  arr = emptyArr;
  console.log("Mảng sau khi đảo: " + arr);
}

// Sắp xếp mảng
function sortArr(arr) {
  // Kiểm tra xem mảng có toàn số hay không
  // Có thể dùng filter để kiểm tra
  let check = true;
  function isAllNumber(arr) {
    for (let eachEle = 0; eachEle < arr.length; eachEle++) {
      let eachEleValue = Number(arr[eachEle]); // Giá trị toàn là số rồi
      if (typeof eachEleValue !== "number") {
        check = false;
        break;
      }
    }
    return check; // true nếu tất cả giá trị trong mảng đều là số.
  }

  if (arr.length === 0) {
    console.log("Mảng rỗng, vui lòng nhập mảng để xem rõ kết quả hơn");
    return;
  }

  // Kiểm tra mảng toàn số hay toàn chữ?
  isAllNumber(arr);

  // Nếu mảng toàn số
  if ((check = true)) {
    // Xếp từ lớn đến bé
    for (let i = 0; i < arr.length; i++) {
      // Kiểm tra 2 số liền kề, so sánh và đổi vị trí nếu số sau lớn hơn số trước
      for (let j = i + 1; j < arr.length; j++) {
        // console.log("j = " + arr[j]);
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  } else {
    // Nếu không phải toàn số, thì xếp bình thường
    arr.sort();
  }

  console.log("Mảng đã được sort là: " + arr);
}

// Row 118 has problem
