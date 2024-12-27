// Mảng Array
// 6. Gán,thay đổi giá trị của mảng qua index
let arr6 = [5, 6, 7];
console.log(arr6); // hiện thị mảng ban đầu
arr6[1] = 10; // gán giá trị index 1 của mảng thành 10
console.log(arr6); // hiện thị sau khi đã gán

// 7. Duyệt mảng
// Cách 1 dùng vòng lặp for
// có thể xem và sửa giá trị mảng
let arr7 = [3, 2, 3, 4, 5, 6];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
// xuất sau khi thay đổi
console.log(arr7);

//  For...of chỉ xem được các phần tử của mảng ko sửa được giá trị của mảng
//  nhưng có thể kiểm tra các điều kiện được

let bienDem = 0;
let arr8 = [1, 2, 4, 5, 6];
for (let element of arr8) {
  if (element % 2 === 0) {
    console.log(element);
    bienDem++;
  }
}
console.log(`Số lượng số chẵn có trong mảng: ${bienDem}`);
