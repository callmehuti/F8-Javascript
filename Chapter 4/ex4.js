/**
 * Viết chương trình sử dụng hàm truyền vào một dãy số sau đó:

    1. In dãy số đã nhập
    2. Tính tổng của dãy số
    3. Tìm số lớn nhất
    4. Tìm số nhỏ nhất

    Sử dụng đối tượng arguments
 */

function displayInput() {
  let myStr = "";
  for (let index = 0; index < arguments.length; index++) {
    // console.log(arguments[index]);
    if (typeof arguments[index] !== "number") {
      console.log("Dãy số có giá trị không phải số");
    } else {
      myStr += `${arguments[index]} `;
    }
  }

  //   console.log(`Dãy số đã nhập: `, myStr);
  return console.log(myStr);
}

// displayInput(1,23,4,5,6,7,8);

/**
 *   let sum = 0;
  let maxNum = arguments[0];
  let minNum = arguments[0];
 */

function sumInput() {
  let sum = 0;
  let myStr = "";
  for (let index = 0; index < arguments.length; index++) {
    if (typeof arguments[index] !== "number") {
      console.log("Dãy số có giá trị không phải số");
    } else {
      sum += arguments[index];
      myStr += `${arguments[index]} `;
    }
  }
  return console.log(`Sum of ${myStr} is: ${sum}`);
}

// function findMax() {
//   let result;
//   for (let index = 0; index < arguments.length; index++) {
//     if (typeof arguments[index] !== "number") {
//       console.log("Dãy số có giá trị không phải số");
//     } else {
//       console.log(arguments[index]);
//       result = Math.max(arguments[index]);
//     }
//   }
//   console.log(result);
// }

// Why cannot using Math.max ??

function findMax() {
  let maxNum = arguments[0];
  for (let index = 0; index < arguments.length; index++) {
    if (typeof arguments[index] !== "number") {
      console.log("Dãy số có giá trị không phải số");
    } else {
      if (maxNum < arguments[index]) {
        maxNum = arguments[index];
      }
    }
  }
  return console.log(maxNum);
}

// findMax(1032132100, 20032133210, 50032132, 132019);

function findMin() {
  let minNum = arguments[0];
  for (let index = 0; index < arguments.length; index++) {
    if (typeof arguments[index] !== "number") {
      console.log("Dãy số có giá trị không phải số");
    } else {
      if (minNum > arguments[index]) {
        minNum = arguments[index];
      }
    }
  }
  return console.log(minNum);
}

findMin(1032132100, 210, 50032132, 132019);