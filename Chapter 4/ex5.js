//  Viết chương trình có sử dụng hàm để hoán đổi giá trị 2 biến


function swapValue(value1, value2) {
    console.log(`Initial value: value 1 = ${value1}, value 2 = ${value2}`);
    let tempValue = value1;
    value1 = value2;
    value2 = tempValue;
    console.log(`After swapping: value 1 = ${value1}, value 2 = ${value2}`);
}

swapValue(1, "hungtin");

// Another way: using destructing assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

