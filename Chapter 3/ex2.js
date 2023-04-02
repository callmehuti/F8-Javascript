// Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.

// Input: width , length
// P = (w+l)*2
// S = w*l


let widthW = prompt("Enter width: ");
let lengthL = prompt("Enter length: ");

let calP = (Number(widthW) + Number(lengthL)) * 2;
console.log("P is:" ,calP);

let calS = (Number(widthW) * Number(lengthL));
console.log("S is:", calS);