// Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

// NHap gia tri 2 so a va b
let a = parseFloat(prompt("Nhap so a: "));
let b = parseFloat(prompt("Nhap so b: "));

// // Kiem tra truong hop
// if (a === 0) {
//   if (b === 0) {
//     console.log("Phuong vinh vo so nghiem.");
//   } else {
//     console.log("Phuong tirnh vo nghiem.");
//   }
// } else {
//   // Lma tron ket qua 2 so thap phan
//   let x = -b / a;
//   x = Math.round(x * 100) / 100;

//   console.log("Nghiem cua phuong trinh la x = " + x);
// }


if (a == 0 && b == 0){
    console.log("Phuong trinh vo so nghien");
}
else if (a != 0 && b == 0){
    console.log("Phuong trinh co mot nghiem x = 0");
}
else if (a == 0 && b != 0){
    console.log("Phuong tirnh vo nghiem");
}
else {
    console.log("phuong tirnh co nghiem x la: " + (-b/a));
}