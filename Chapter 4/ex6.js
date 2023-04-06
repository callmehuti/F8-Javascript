// Viết hàm kiểm tra xem 1 số có phải là số nguyên tố không?

function isPrime() {
  let number = Number(prompt("Please input any value u like"));
  if (isNaN(number)) {
    console.log("Wrong input value");
  } else {
    // Check number is prime or not
    if (number < 2) {
        return alert(`${number} is not prime`);
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return alert(`${number} is not prime`);
        }
      }
      return alert(`${number} is prime`);
    }
  }
}
// 1,25 and 1.25 both are converted to number but only 1,25 is checked by condition ????

isPrime();
