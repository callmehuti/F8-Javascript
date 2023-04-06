// Viết hàm kiểm tra xem 1 số có phải là số hoàn hảo không?

function perfectNum() {
  let number = Number(prompt("Please input any value u like"));
  let sum = 0;
  if (isNaN(number)) {
    console.log("Wrong input value");
  } else {
    // Check if the number is perfect number or not
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }

    if (sum === number) {
      console.log(number + " is perfect number.");
    } else {
      console.log(number + " is not perfect number.");
    }
  }
}

perfectNum();
