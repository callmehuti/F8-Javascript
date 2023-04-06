// Viết hàm kiểm tra xem 1 số có phải là số đối xứng không?

function symNumber() {
  let number = prompt("Please input any value u like");
  //   console.log(number);
  let isSymmetric = true;
  if (isNaN(number)) {
    console.log("Wrong input value, not a number");
  } else {
    // Check if the number is a symmetrical number or not
    for (let i = 0; i < number.length / 2; i++) {
      if (number[i] !== number[number.length - i - 1]) {
        isSymmetric = false;
        return console.log(`${number} is not a sym number`);
      }
    }
    return console.log(`${number} is a sym number`);
  }
}

symNumber();
