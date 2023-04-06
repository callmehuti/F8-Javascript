// Viết chương trình có sử dụng hàm nhận vào 1 dãy số => in ra các số nguyên tố trong dãy đó.

// inSoNT(2,3,4,5,6,7,8,9);; // => output: 2,3,5,7

// From ex6.js Chapter 4

// Viết hàm kiểm tra xem 1 số có phải là số nguyên tố không?

function isPrime(number) {
  if (isNaN(number)) {
    console.log("Wrong input value");
  } else {
    // Check number is prime or not
    if (number < 2) {
      return false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
}
// 1,25 and 1.25 both are converted to number but only 1,25 is checked by condition ????

function logPrimeNum() {
  myPrimeStr = "";

  for (let index = 0; index < arguments.length; index++) {
    if (isPrime(arguments[index])) {
    //   console.log(isPrime(arguments[index]));
    // myPrimeStr += arguments[index] + ", ";
    myPrimeStr += `${arguments[index]}, `
    }
  }
  console.log(myPrimeStr.slice(0, -2)); // slice to remove the last ,
}

logPrimeNum(2, 3, 4, 5, 6, 7, 8, 9);
// isPrime(96);
