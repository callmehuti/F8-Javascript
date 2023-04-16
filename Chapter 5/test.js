// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(',');
// console.log(words);
// // console.log(words[3]);

let arr = [4, 1, 5, 3, 2];

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Before swap: " + arr);
    console.log("iiiiiii = " + arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log("j = " + arr[j]);
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(arr);
  }
}

sortArr(arr);
