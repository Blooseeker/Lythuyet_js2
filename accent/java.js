// Mảng Array
// 6. Gán,thay đổi giá trị của mảng qua index
// let arr6 = [5, 6, 7];
// console.log(arr6); // hiện thị mảng ban đầu
// arr6[1] = 10; // gán giá trị index 1 của mảng thành 10
// console.log(arr6); // hiện thị sau khi đã gán

// // 7. Duyệt mảng
// // Cách 1 dùng vòng lặp for
// // có thể xem và sửa giá trị mảng
// let arr7 = [3, 2, 3, 4, 5, 6];
// console.log(arr7);
// for (let i = 0; i < arr7.length; i++) {
//   console.log(arr7[i]);
//   arr7[i] = arr7[i] * 2;
// }
// // xuất sau khi thay đổi
// console.log(arr7);

// //  For...of chỉ xem được các phần tử của mảng ko sửa được giá trị của mảng
// //  nhưng có thể kiểm tra các điều kiện được

// let bienDem = 0;
// let arr8 = [1, 2, 4, 5, 6];
// for (let element of arr8) {
//   if (element % 2 === 0) {
//     console.log(element);
//     bienDem++;
//   }
// }
// console.log(`Số lượng số chẵn có trong mảng: ${bienDem}`);

// 32.2 JavaScript Array Methods( các phương thức làm việc với mảng)
// https://www.youtube.com/watch?v=U0tLc4aYUAw
// 1. Nối mảng
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2);
// console.log(newArr);

// // 2.thêm 1 phần tử vào cuối mảng gốc
// let arr3 = [1, 2, 3];
// arr3.push(4, 5);
// console.log(arr3);

// // 3.Thêm 1 OR nhiều vào đầu mảng gốc
// let arr4 = [1, 2];
// arr4.unshift(0, 2, "nam");
// console.log(arr4);

// // 4.Loại bỏ phần tử cuối cùng của mảng gốc
// let arr5 = [1, 2, 3, 4, "nam"];
// let removeElement = arr5.pop();
// console.log(arr5);
// console.log(removeElement);

// // 5.Loại bỏ phần tử đàu tiên của mảng gốc
// let arr6 = [1, 2, 3, 4];
// let removeElement1 = arr6.shift();
// console.log(arr6);
// console.log(removeElement1);

// // 6. Slice Sử dụng bản sao của mảng gốc
// let arr7 = [1, 2, 3, 4, 5];
// let sliceArr = arr7.slice(1, 4);
// console.log(sliceArr);

// //  7.includes Kiểm tra xem mảng có chứa giá trị cụ thể hay ko
// //  Trả về true nếu có và false nếu không
// let arr8 = [1, 2, 3, 4, "nam"];
// let isPresent = arr8.includes("nam");
// console.log(isPresent);

// 32.3 JavaScript Array Methods p2 Các phương thức làm việc với Array JS
// https://www.youtube.com/watch?v=jVi9929GMQY
// 8. trả về vị trí index cảu phần tử xuất hiện lần đầu tiên
// không có trả về giá trị -1
// let arr9 = [1, 2, 3, 4, 2, 4, 2, 6];
// let index = arr9.indexOf(2);
// console.log(index); // trả về giá trị index 1

// // 9.lastIndexOf()trả về giá trị cuối cùng
// let arr10 = [1, 2, 3, 4, 2, 4, 2, 6];
// let index2 = arr10.indexOf(2);
// console.log(index2); // trả về giá trị index 6

// // 10. reverse() đảo ngược các thứ tự mảng gốc
// // nó thay đổi mảng gốc mà k tạo ra mảng mới
// let arr11 = [1, 2, 3, 2, 6];
// arr11.reverse();
// console.log(arr11); // [6, 2, 3, 2, 1]
// // nếu muốn giữ bản gốc thì tạo bản sao
// let arr12 = [1, 2, 3, 2, 6];
// let arr13 = arr12.slice().reverse();
// console.log(arr12); //[1, 2, 3, 2, 6] bản gốc giữ nguyên
// console.log(arr13); //[6, 2, 3, 2, 1] bản sao đã đổi

// // 11. Array.join Nối các phần tử trong mảng bằng kí tự nào đó
// // trường hợp 1 ko truyền để trống
// let arr14 = ["nam", "trang", 1, 2, 3];
// let string1 = arr14.join(); // để trống
// console.log(string1); //nam,trang,1,2,3
// console.log(typeof string1);

// // trường hợp 2 truyền kí tự nối
// let arr15 = ["nam", "trang", 1, 2, 3];
// let string2 = arr15.join("+"); // truyền vào dấu "+"
// console.log(string2);

// 32.4 Hiểu Rõ Sức Mạnh của splice() - Chinh Phục Mảng JavaScript
// https://www.youtube.com/watch?v=b4M34qYae10

// 12.1 Loại bỏ phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(2, 1); // Xóa 1 phần tử ở vị trí index 2 trở đi
console.log(arr11); // kết quả: [1, 2, 4, 5] xóa 3

// 12.2 Thay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); // Xóa 1 phần tử ở vị trí index 2 rồi thay vào đó 6
console.log(arr12); //kết quả: [1, 2, 4, 5] xóa 3 để thay 6 vào

// 12.3 Thêm phần tử vào mảng
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 8); // Xóa 0 phần tử ở vị trí index 2 rồi thay vào đó 6
console.log(arr13); // kết quả:[1, 2, 6, 8, 3, 4, 5]
